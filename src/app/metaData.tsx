const meataDataInformations: any = {
  home: {
    fa: {
      title: "امیرحسین بنایی",
      description: "امیرحسین بنایی - برنامه نویس فرانت اند و بک اند",
    },
    en: {
      title: "Amir Hossein Banaei",
      description: "Amir Hossein Banaei - Front-end and Back-end developer",
    },
  },
};

export default function MetaData(props: { language: string; page: string }) {
  const { language, page } = props;
  const title = meataDataInformations[page][language].title;
  const desciption = meataDataInformations[page][language].description;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desciption} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desciption} />
      <meta property="og:site_name" content={title} />
      <meta property="og:brand" content={title} />
    </>
  );
}
