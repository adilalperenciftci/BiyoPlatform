import React from 'react';
import { useSpring, animated } from 'react-spring';
import './homePage.css';

const HomePage = () => {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    return (
        <animated.div className="home-page" style={fadeIn}>
            <h1>Hoş Geldiniz!</h1>
            <p>Biyoteknoloji Araştırma ve Geliştirme Platformuna hoş geldiniz. Burada biyoteknoloji ile ilgili en güncel bilgileri bulabilirsiniz.</p>

            <div className="row">
                {/* Makale ve Konular Bölümü */}
                <div className="col-md-6">
                    <h2>Son Makaleler</h2>
                    <ul>
                        <li><a href="/makale1">Makale 1: Biyoteknolojide Yenilikler</a></li>
                        <li><a href="/makale2">Makale 2: Gen Tedavileri ve Uygulamaları</a></li>
                        <li><a href="/makale3">Makale 3: Biyoteknolojide Etik Meseleler</a></li>
                    </ul>

                    <h2>Popüler Konular</h2>
                    <ul>
                        <li><a href="/genom-düzenleme">Genom Düzenleme</a></li>
                        <li><a href="/biyoteknoloji-etik">Biyoteknoloji ve Etik</a></li>
                        <li><a href="/biyosensörler">Biyosensörler ve Kullanım Alanları</a></li>
                    </ul>
                </div>

                {/* Haber ve Etkinlik Bölümü */}
                <div className="col-md-6">
                    <h2>Son Haberler</h2>
                    <ul>
                        <li><a href="/haber1">Haber 1: Yeni Bir Biyoteknoloji İnovasyonu</a></li>
                        <li><a href="/haber2">Haber 2: Biyoteknoloji Sektöründeki Güncel Etkinlikler</a></li>
                    </ul>

                    <h2>Yaklaşan Etkinlikler</h2>
                    <ul>
                        <li><a href="/etkinlik1">Etkinlik 1: Biyoteknoloji Konferansı 2023</a></li>
                        <li><a href="/etkinlik2">Etkinlik 2: Biyoteknoloji ve Sürdürülebilirlik Paneli</a></li>
                    </ul>
                </div>
            </div>
        </animated.div>
    );
};

export default HomePage;
