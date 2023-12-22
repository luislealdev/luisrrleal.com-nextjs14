'use client'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.core.css";

const WritePage = () => {

    const [value, setValue] = useState('');

    const toolbarOptions = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    return (
        <main>
            <section className='grid-c-2'>
                <div className='flex column gap-15 p-40'>
                    <h1>Nuevo Artículo</h1>
                    {/* <input type="text" placeholder='Título' className='input' /> */}
                    <ReactQuill theme="snow" modules={toolbarOptions} value={value} onChange={setValue} />
                </div>
                <div id='preview-article'>
                    <h2>Preview</h2>
                    <div dangerouslySetInnerHTML={{ __html: value }} className='f-size-18 mt-10 view ql-editor' />
                </div>
            </section>
            <div className='flex justify-content mt-50'>
                <button className='ph-20 p-10 bg-blue white-text radius' style={{ border: 0 }}>Publicar ahora</button>
            </div>
        </main>
    )
}

export default WritePage;