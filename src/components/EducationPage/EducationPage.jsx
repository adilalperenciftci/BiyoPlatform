import React from 'react';
import { Link } from 'react-router-dom';
import './educationPage.css';

type Material = {
  id: number;
  title: string;
  description: string;
};

const EDUCATION_MATERIALS: Array<Material> = [
  { id: 1, title: "Biyoteknoloji Temelleri", description: "Genetik mühendislik, biyoinformatik ve hücre kültürü gibi biyoteknoloji alanının anahtar konuları." },
  { id: 2, title: "Genetik Mühendislik Uygulamaları", description: "DNA manipülasyonu, gen terapisi ve biyoteknolojik ürünlerin geliştirilmesi üzerine detaylı bir rehber." },
  { id: 3, title: "Biyoinformatik ve Veri Analizi", description: "Biyo-informatik araçları, genom veri analizi ve biyolojik veri madenciliği teknikleri hakkında bilgi." },
  { id: 4, title: "Hücre Kültürü Teknikleri", description: "Hücre kültürü yöntemleri, medyum hazırlığı ve hücre proliferasyonu üzerine kapsamlı bir inceleme." },
  { id: 5, title: "Fermantasyon ve Biyoreaktörler", description: "Fermantasyon süreçleri, biyoreaktör tasarımı ve endüstriyel uygulamaları üzerine bir derleme." },
  { id: 6, title: "Biyoteknolojik Ürünlerin Regülasyonu", description: "Biyoteknolojik ürünlerin yasal düzenlemeleri, etik sorunlar ve toplumsal etkileri hakkında bilgiler." },
  { id: 7, title: "Protein Mühendisliği", description: "Protein yapısının anlaşılması, protein mühendisliği yöntemleri ve uygulama alanları üzerine bir inceleme." },
  { id: 8, title: "Genom Düzenleme Teknikleri", description: "CRISPR-Cas9 gibi genom düzenleme teknolojileri, potansiyel uygulamaları ve etik sorunları." },
  { id: 9, title: "Biyoteknoloji ve Çevre", description: "Biyoteknolojik yöntemlerin çevresel uygulamaları, biyoremediasyon ve sürdürülebilirlik üzerine bir derleme." },
  { id: 10, title: "Nanoteknoloji ve Biyoteknoloji Entegrasyonu", description: "Nanoteknolojinin biyoteknoloji ile entegrasyonu, nanomateryallerin biyomedikal uygulamaları ve geleceği." },
];

function EducationPage() {
  return (
    <div className="education-page">
      <h1>Eğitim Materyalleri</h1>
      <div className="materials-list">
        {EDUCATION_MATERIALS.map((material) => (
          <div key={material.id} className="material">
            <h2>{material.title}</h2>
            <p>{material.description}</p>
            <Link to={`/education/${material.id}`} className="details-button">
              Detaylar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;
