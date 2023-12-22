import { qr_generator_titles } from "../../../../data/tools";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface Props {
  params: { slug: string };
}


export async function generateStaticParams() {

  const titles = qr_generator_titles.map((title) =>
    title.replace(/\s+/g, "-").toLowerCase()
  );

  return titles.map((title) => ({
    title
  }));
}





const QrGenerator: NextPage<Props> = ({ newTitle }) => {
  const [url, setUrl] = useState("https://luisrrleal.com/");
  const [userUrl, setuserUrl] = useState("https://luisrrleal.com/");

  const handleChange = (event: ChangeEvent<FormElement>) => {
    setuserUrl(event.target.value);
  };

  const onHandleSubmit = () => {
    if (url.includes("http")) {
      setUrl(userUrl);
    } else {
      setUrl("https://:" + userUrl);
    }
  };

  return (
    <div>
      <h1>{newTitle}</h1>
      <div className="flex justify-center column align-center">
        <Image
          width={300}
          height={300}
          src={`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${url}`}
          alt="qr code"
        />
        <br />
        <div className="flex justify-center">
          <div className="flex justify-center column">
            <input
              width="300px"
              type="text"
              id="userUrl"
              name="userUrl"
              onChange={handleChange}
              value={userUrl}
            />
            <button onClick={() => onHandleSubmit()}>Generate</button>
            <br />
            <p style={{ textAlign: "center" }}>
              Check the QR code before sharing it ;)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = qr_generator_titles.map((title) =>
    title.replace(/\s+/g, "-").toLowerCase()
  );

  return {
    paths: paths.map((title) => ({
      params: { title },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { title } = params as { title: string };

  const newTitle = title.replaceAll("-", " ").toUpperCase();

  return {
    props: {
      newTitle,
    },
  };
};

export default QrGenerator;
