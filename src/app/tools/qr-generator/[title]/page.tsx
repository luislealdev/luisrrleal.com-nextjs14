import { qr_generator_titles } from "../../../../data/tools";
import { NextPage } from "next";
import { QrForm } from '../ui/QrForm';

interface Props {
  params: { title: string }
}

export const dynamicParams = false;

export async function generateStaticParams() {

  const titles = qr_generator_titles.map((title) =>
    title.replace(/\s+/g, "-").toLowerCase()
  );

  return titles.map((title) => ({
    title
  }));
}

const QrGenerator: NextPage<Props> = ({ params }: Props) => {

  const title = params.title.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div>
      <h1 className="center-text f-size-50">{title}</h1>
      <QrForm />
    </div>
  );
};

export default QrGenerator;
