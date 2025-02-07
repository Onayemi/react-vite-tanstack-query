import { Helmet } from "react-helmet-async";

interface ISeoProps {
  title: string;
  description: string;
}
const Seo = ({ title, description }: ISeoProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://remlextech.com" />
      </Helmet>
    </>
  );
};

export default Seo;
