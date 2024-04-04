import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.core.css";
import { getArticleBySlug, getCategories } from '@/actions';
import { redirect } from 'next/navigation';
import { Form } from './ui/Form';


interface Props {
    params: {
        slug: string;
    }
}

const WritePage = async ({ params }: Props) => {

    const { slug } = params;
    const categories = await getCategories();

    const [article] = await Promise.all([
        getArticleBySlug(slug),
        //TODO: GET CATEGORIES HERE (CREATE FUNCTION), add to [product, categories]
        // getCategories()
    ]);

    if (!article && slug != 'new') redirect('/blog/admin');

    const title = (slug === 'new') ? 'Nuevo artículo' : 'Editar artículo';

    const formattedArticle = article ? {
        ...article,
        date: article.date.toString() // Convert date to string
    } : {};

    return (
        <main>
            <Form article={formattedArticle} title={title} categories={categories ?? []} />
        </main>
    )
}


export default WritePage;