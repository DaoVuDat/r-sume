import { GetStaticProps } from 'next';

const AboutPage = () => {
  return <div className="mt-16">CONTENT</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default AboutPage;
