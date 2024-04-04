'use client'
import { createUpdateArticle } from '@/actions';
import { Article } from '@/interfaces';
import { Category } from '@prisma/client';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import { useForm } from 'useform-simple-hook';

const formData = {
    newTitle: "",
    metatags: "",
    description: "",
    categoryId: ""
};

interface formData {
    newTitle?: string;
    metatags?: string;
    description?: string;
    categoryId?: string;
}

interface Props {
    title: string,
    categories: Category[],
    article: Partial<Article>
}

export const Form: FC<Props> = ({ title, categories, article }) => {

    const { data } = useSession();

    const router = useRouter();

    const { formState, onInputChange, onResetForm } = useForm(article);

    const { newTitle = article.title, metatags = article.metatags?.toString(), description = article.description, categoryId = categories[0].id }: formData = formState;

    const [content, setcontent] = useState(article.content);

    const [coverImage, setCoverImage] = useState<File >(); // Estado para almacenar la imagen de portada seleccionada

    const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setCoverImage(file);
        }
    };

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

        if (!coverImage) {
            return;
        }

        if (article.id) formData.append("id", article.id);
        formData.append("coverImage", coverImage);

        formData.append("title", newTitle ?? '');
        formData.append("description", description ?? '');
        formData.append("metatags", metatags ?? '');
        // CHANGE THIS TO ANY SELECTED CATEGORY
        formData.append("categoryId", categoryId ?? '');
        formData.append("content", content ?? '');
        formData.append("slug", (newTitle ?? '').toLocaleLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        formData.append("date", new Date().toLocaleDateString('en-GB'));
        formData.append("userId", data!.user!.id ?? '');

        const { ok, article: updatedArticle } = await createUpdateArticle(formData);

        if (!ok) {
            alert("Artículo no se pudo actualizar");
            return;
        }

        router.replace(`/blog/admin/write/${updatedArticle?.slug}`);

        Swal.fire({
            title: "Good job!",
            text: "Article has been published!",
            icon: "success"
        });
    }

    return (
        <>
            <section className='grid-c-2'>
                <div className='flex column gap-5 p-40'>
                    <h1>Nuevo Artículo</h1>
                    <form onSubmit={onSubmit} className='flex column'>
                        <input type="file" accept="image/*" onChange={handleCoverImageChange} />
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
                            className='input'
                            value={categoryId}
                            onChange={onInputChange}
                            name='categoryId'>
                            {
                                categories.map((category, index) => (
                                    <option defaultChecked={index == 0} key={category.id} value={category.id}>{category.category}</option>
                                ))
                            }
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
