import { useMemo } from "react";
import Image from "next/image";

import "./styles.scss";

import iskur1xImage from "@/assets/images/iskur-logo@1x.webp";
import iskur2xImage from "@/assets/images/iskur-logo@2x.webp";
import iskur3xImage from "@/assets/images/iskur-logo@3x.webp";

export default function Footer(): JSX.Element {
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <header className="footer-top__header">Sizin için iş ilanları</header>
        <div className="footer-top__col">
          <h3 className="title">Popüler Kategoriler</h3>
          <ul>
            <li>
              <a href="#">Yazılım Geliştirme</a>
            </li>
            <li>
              <a href="#">Mobil Uygulama Geliştirme</a>
            </li>
            <li>
              <a href="#">Kullanıcı Deneyimi </a>
            </li>
            <li>
              <a href="#">Kullanılabilirlik</a>
            </li>
            <li>
              <a href="#">Proje Yönetimi</a>
            </li>
            <li>
              <a href="#">İş Analizi</a>
            </li>
            <li>
              <a href="#">Raporlama Uzmanı</a>
            </li>
            <li>
              <a href="#">Test Uzmanı</a>
            </li>
            <li>
              <a href="#">Yazılım Mimarı</a>
            </li>
            <li>
              <a href="#">Arayüz Tasarımı</a>
            </li>
          </ul>
        </div>

        <div className="footer-top__col">
          <h3 className="title">Popüler Başlıklar</h3>
          <ul>
            <li>
              <a href="#">Senior .net Developer</a>
            </li>
            <li>
              <a href="#">Senior Mobile Developer</a>
            </li>
            <li>
              <a href="#">Kullanıcı Deneyimi Tasarımcısı</a>
            </li>
            <li>
              <a href="#">Kullanılabilirlik Uzmanı</a>
            </li>
            <li>
              <a href="#">IT Sorumlusu</a>
            </li>
            <li>
              <a href="#">Mid Level .net Developer</a>
            </li>
          </ul>
        </div>

        <div className="footer-top__col">
          <h3 className="title">Popüler Lokasyonlar</h3>
          <ul>
            <li>
              <a href="#">İstanbul</a>
            </li>
            <li>
              <a href="#">İzmir</a>
            </li>
            <li>
              <a href="#">Ankara</a>
            </li>
          </ul>
        </div>

        <div className="footer-top__col">
          <h3 className="title">Popüler Şirket İlanları</h3>
          <ul>
            <li>
              <a href="#">Koç Sistem</a>
            </li>
            <li>
              <a href="#">Aktif Bank</a>
            </li>
            <li>
              <a href="#">Akbank</a>
            </li>
            <li>
              <a href="#">Türk Hava Yolları</a>
            </li>
            <li>
              <a href="#">Brisa</a>
            </li>
            <li>
              <a href="#">Vakıfbank</a>
            </li>
            <li>
              <a href="#">Neyasis Tech.</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__links">
          <a href="#" className="trademark">
            ®{currentYear} finddeveloper.net
          </a>

          <ul className="footer-bottom__links-group">
            <li>
              <a href="#">Gizlilik Merkezi</a>
            </li>
            <li>
              <a href="#">Çerezler</a>
            </li>
            <li>
              <a href="#">Gizlilik</a>
            </li>
            <li>
              <a href="#">Şartlar</a>
            </li>
          </ul>

          <ul className="footer-bottom__links-group">
            <li>
              <a href="#">Finddeveloper’da Çalışmak</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Yardım Merkezi</a>
            </li>
          </ul>

          <select name="language">
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="footer-bottom__iskur">
          <picture className="footer-bottom__iskur-picture">
            <source srcSet={iskur3xImage.src} media="(min-width: 768px)" />
            <source srcSet={iskur2xImage.src} media="(min-width: 640px)" />
            <Image
              className="footer-bottom__iskur-picture"
              src={iskur1xImage}
              alt="İşkur Brand Logo"
            />
          </picture>

          <p className="footer-bottom__iskur-description">
            Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
            31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere,
            Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar
            uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı
            kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin
            edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına
            başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu
            İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul
            Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :<br />
            0216 523 90 26
          </p>
        </div>
      </div>
    </footer>
  );
}
