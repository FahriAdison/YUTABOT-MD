interface result {
    title: string;
    img: string;
    articles: string;
}
export default function wikipedia(query: string, lang?: 'en' | 'id'): Promise<result>;
export {};
