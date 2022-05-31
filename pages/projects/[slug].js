// import components
import Head from "next/head";
import { useRouter } from 'next/router'
// import core components
import { Header, Footer, Stack, Section, Text, IMG } from '../../components/components';
// import markdown
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
// import api
import { fetchAPI, getStrapiURL } from "/api/strapi";


// fetch and check slugs
export const getStaticPaths = async () => {
    const content = await fetchAPI(`/projects`);
    const paths = content.map(content => {
        return {
            params: { slug: content.slug.toString() }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

// fetch data
export async function getStaticProps(context) {
    const slug = context.params.slug;
    // get content from our api
    const header = await fetchAPI(`/header`);
    const footer = await fetchAPI(`/footer`);
    const content = await fetchAPI(`/projects/` + slug);
    // return content from our api 
    return {
        props: { header, content, footer },
        revalidate: 600,
    };
}

export default function Project({ header, footer, content }) {
    return (
        <div>
            
            {/* Header */}

            <Header data={header} sticky styling="top-0 z-50 rounded-none" />

            {/* Content */}

            <div className='p-6'>
                <Section spacing="large">
                    <Text variant="d">{content.headline}</Text>
                    <Text>{content.description}</Text>
                    <IMG variant="fix" src={getStrapiURL(content.image.url)} styling="mt-12"/>
                </Section>
                <Section size="medium" spacing="none" dangerouslySetInnerHTML={{ __html: md.render(content.content) }} />
            </div>

            {/* Footer */}

            <Footer data={footer} />

        </div>
    )
}
