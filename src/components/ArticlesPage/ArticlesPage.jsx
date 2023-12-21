import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './articlesPage.css';

interface ArticleProps {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
}

const ArticlesList: React.FC<{ articles: ArticleProps[] }> = ({ articles }) => (
  <div className="articles-list">
    {articles.map((article) => (
      <div key={article.id} className="article">
        <img src={article.imageUrl} alt={article.title} className="article-image" />
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
        <Link to={`/articles/${article.id}`}>Devamını Oku</Link>
      </div>
    ))}
  </div>
);

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    // API'den makaleleri çekme simülasyonu
    const fetchArticles = async () => {
      // API isteği yerine geçici olarak statik veri kullanıldı
      const articlesData: ArticleProps[] = [
        { id: 1, title: 'Synthesis of Extract-Bacterial Cellulose Composite Using Ageratum conyzoides L. and Chromolaena odorata L., Its Antibacterial Activities, and Biodegradability Properties', summary: 'Bacterial cellulose is a natural polymer produced by fermentation of coconut water using Acetobacter xylinum bacteria. This study aimed to synthesize a novel composite of bacterial cellulose impregnated with plant extracts that had an antibacterial activity that have the potential to be used as a food packaging material to maintain food quality. Pure bacterial cellulose (pure BC) was impregnated using Ageratum conyzoides L. leaf extract (AC-BC) and Chromolaena odorata L. leaf extract (CO-BC), which contain secondary metabolites with potential as antibacterial. The study began with the synthesis of pure BC, AC-BC, and CO-BC composites then characterized by SEM–EDX and FTIR, continued with antibacterial activity tests against S. aureus, S. typhimurium, E. coli, and their biodegradability tests. The results of SEM and FTIR characterization showed the success of the impregnation process for antibacterial compounds. The results of the antibacterial activity of AC-BC disc diffusion against S. typhimurium and E. coli showed good antibacterial activity of 9.82 mm and 8.41 mm, respectively. The similar result showed with the antibacterial activity of CO-BC disc diffusion against S. typhimurium and E. coli that showed good activity of 9.73 mm and 6.82 mm, respectively. On the other hand, the biodegradability test showed that the impregnation of bacterial cellulose slowed down the degradation process in the soil. This study confirmed the potential application of bacterial cellulose-plant extracts as an active and biodegradable food packaging.', imageUrl: 'https://th.bing.com/th/id/OIG.__xuMDX6I5IkLslT53i3?w=1024&h=1024&rs=1&pid=ImgDetMain' },
        { id: 2, title: 'MYCT-1 Gene Expression in Patients with Gastric Cancer: an Ex Vivo Study', summary: 'Ploidy, p53, bcl-2, and c-myc genes are associated with gastric cancer. Myc target 1 (MYCT1) gene is an oncogenic gene and is associated with cancer progression through different signal transduction pathways identifying the corresponding genes The objective of the study was to evaluate the association between MYCT1 gene expression and gastric cancer. Real-time polymerase chain reaction (RT-PCR), western blot analysis, cell growth study, and TUNEL assay were performed for the human gastric cancer cell lines and human embryonic kidney cell line. β-Actin gene preferred as a control in RT-PCR. The ratio of MYCT1 gene expression to β-actin gene expression less than 0.5 was considered as downregulation. Using SDS-PAGE MYCT1 gene expression was measured in western blot analysis. Cells with and without the MYCT1 gene were incubated in 35 mm plates with 10% fetal bovine serum in the cell growth study. TUNEL assay was performed to detect the effect of the MYCT1 gene on the apoptosis of cells. The ratio of MYCT1 gene expression to β-actin gene expression was 0.47 ± 0.01 and 0.76 ± 0.01 for human gastric cancer cell lines and human embryonic kidney cell lines, respectively. MYCT1 gene expression was downregulated in the human gastric cancer cell lines than human embryonic kidney cell line (p < 0.001). MYCT1 gene decreased cell growth (p = 0.041) during 6 days of incubation study of cells. TUNEL assay showed only the fluorescence of PI in BGC823 cells without the MYCT1 gene. MYCT1 gene expression was downregulated in the human gastric cancer cell lines, and MYCT1 gene accelerates the apoptotic process.', imageUrl: 'https://th.bing.com/th/id/OIG.LWiSYqkdMSt7cndlIos5?w=1024&h=1024&rs=1&pid=ImgDetMain' },
        { id: 3, title: 'Anti-Bacterial and Immunostimulatory Properties of Ulvan-Loaded Chitosan Nanoparticles for Use in Aquaculture', summary: 'Alternative prophylactic strategies to limit farm animal infection are needed in order to avoid the use of antibiotics. Anti-bacterial and immunostimulatory properties of bioactive compounds are of great interest in aquaculture. Marine derived polysaccharides, such as chitosan and ulvan, together with nanotechnology, have become the focus of attention in the scientific community due to their wide range of biological properties. In this work, chitosan and ulvan-loaded chitosan nanoparticles (referred as CS-TPP NPs and CS-UL-TPP NPs, respectively), obtained by the ionotropic gelation method, had round shape, and the mean sizes were 137.00 ± 5.44 and 325.50 ± 4.95 nm, respectively. No study about the anti-bacterial activity of both types of NPs against Photobacterium damselae subsp. piscicida, an important fish pathogen, has been reported so far. Furthermore, the potential immunostimulatory effects of CS-UL-TPP NPs after oral administration in fish have not yet been evaluated. The percentage of bacterial inhibition against P. damselae subsp. piscicida was determined through in vitro assays, and it was significantly higher in CS-UL-TPP NPs than in CS-TPP NPs at concentrations below 0.03 mg mL−1. The effects on the immune system of CS-TPP and CS-UL-TPP NPs were evaluated in Solea senegalensis juveniles at 30 days after oral administration. Lysozyme activity as well as gene expression levels of il1b, il6, hamp1, tf and c3 was significantly higher in CS-UL-TPP NP-treated groups than in the controls, and no significant differences were observed in CS-TPP NP-treated groups. Thus, ulvan extracted from the macroalgae Ulva ohnoi could improve anti-bacterial and immunostimulant properties of CS-TPP NPs thereby making them suitable to be used as vaccine adjuvant or as immunostimulant.', imageUrl: 'https://th.bing.com/th/id/OIG.yqqtQjHA5DWlbXRQu4.9?w=1024&h=1024&rs=1&pid=ImgDetMain' },
        // Daha fazla makale eklenebilir
      ];
      setArticles(articlesData);
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-page">
      <h1>Makaleler</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesPage;
