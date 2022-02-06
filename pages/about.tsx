import { GetStaticProps } from 'next';

const AboutPage = () => {
  return <div>CONTENT</div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default AboutPage;
