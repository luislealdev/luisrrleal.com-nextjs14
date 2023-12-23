'use client'
import { createUpdateArticle } from '@/actions';
import { Article } from '@/interfaces';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'
import ReactQuill from 'react-quill';
import { useForm } from 'useform-simple-hook';

const formData = {
    newTitle: "",
    metatags: "",
    description: "",
    category: ""
};

interface formData {
    newTitle?: string;
    metatags?: string;
    description?: string;
    category?: string;
}

interface Props {
    title: string,
    categories: string[],
    article: Partial<Article>
}

export const Form: FC<Props> = ({ title, categories, article }) => {

    const router = useRouter();

    const { formState, onInputChange, onResetForm } = useForm(article);

    const { newTitle = article.title, metatags = '', description = '', category }: formData = formState;

    const [content, setcontent] = useState(article.content);

    const toolbarOptions = {
        toolbar: [
            [{ font: [] }],
            [{ header: [2, 3] }],
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

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        if (article.id) formData.append("id", article.id);

        formData.append("title", newTitle ?? '');
        formData.append("description", description ?? '');
        formData.append("metatags", metatags ?? '');
        formData.append("categoryId", 'da36adb0-a726-4973-82a4-f43bcb48aaf4');
        formData.append("content", content ?? '');
        formData.append("slug", (newTitle ?? '').toLocaleLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        formData.append("date", new Date().toLocaleDateString('en-GB'));
        formData.append("userId", "83db012f-cbd3-4d43-8072-bb7edba51ac0");

        const { ok, article: updatedArticle } = await createUpdateArticle(formData);

        if (!ok) {
            alert("Artículo no se pudo actualizar");
            return;
        }

        router.replace(`/blog/admin/write/${updatedArticle?.slug}`);
    }

    return (
        <>
            <section className='grid-c-2'>
                <div className='flex column gap-5 p-40'>
                    <h1>Nuevo Artículo</h1>
                    <form onSubmit={onSubmit} className='flex column'>
                        <input type="text"
                            value={newTitle}
                            onChange={onInputChange}
                            name='newTitle'
                            placeholder='Título - Piensa en algo que las personas buscarían exactamente relacionado con tu artículo'
                            className='input' />
                        <textarea
                            value={description}
                            onChange={onInputChange}
                            name='description'
                            placeholder='Descripción - Ingresa las primeras dos líneas del contenido textual del artículo'
                            className='input'
                            style={{ resize: 'none' }} />
                        <input type="text"
                            value={metatags}
                            onChange={onInputChange}
                            name='metatags'
                            placeholder='Metatags - Ingresa,palabras,claves,separadas,por,comas'
                            className='input' />
                        <select
                            className='input' value={category}
                            onChange={onInputChange}
                            name='category'>
                            <option value="">Tecnología</option>
                            <option value="">Política</option>
                            <option value="">Cultura</option>
                        </select>

                        <ReactQuill theme="snow" modules={toolbarOptions} value={content} onChange={setcontent} className='mt-10' />
                        <div className='flex justify-content' style={{ marginTop: 100 }}>
                            <button type='submit' className='ph-20 p-10 bg-blue white-text radius' style={{ border: 0 }}>Publicar ahora</button>
                        </div>
                    </form>
                </div>
                <div id='preview-article'>
                    <h2>Preview</h2>
                    <div dangerouslySetInnerHTML={{ __html: content ?? '' }} className='f-size-18 mt-10 view ql-editor' />
                </div>
            </section>
        </>
    )
}
