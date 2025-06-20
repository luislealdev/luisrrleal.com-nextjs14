import Image from "next/image";
import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    text: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, text }) => (
    <div
        style={{
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 16px rgba(60,60,60,0.10)",
            padding: 24,
            textAlign: "center",
            margin: "0 auto",
        }}
    >
        <Image
            width={1000}
            height={1000}
            src={image}
            alt={title}
            className="card-img auto-height"
        />
        <h2 className="f-size-22 bold mb-10" style={{ fontSize: 22, fontWeight: 700, marginBottom: 10 }}>{title}</h2>
        <p className="gray-color f-size-16" style={{ color: "#555", fontSize: 16 }}>{text}</p>
    </div>
);

export default ProjectCard;
