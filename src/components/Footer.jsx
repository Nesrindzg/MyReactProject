import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div
        className="footer-main style-1 py-10"
        style={{
          background: `
            linear-gradient(rgb(6,6,6), rgba(0,0,0,0)),
            linear-gradient(to top, rgb(12,12,12), rgba(0,0,0,0)),
            url('https://anizium.com/assets/index-assets/img/footer/bg.png')
          `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            
            {/* Sol Alan */}
            <div className="lg:w-1/2 w-full">
              <div className="mb-6">
                <a href="/" title="Anizium">
                  <img
                    src="https://anizium.com/assets/global-img/logo.png"
                    alt="Anizium logo"
                    className="w-36"
                  />
                </a>
              </div>

              <p className="mb-5 text-sm">
                Dünyanın ilk ve tek 4K Anime izleme platformu Anizium olarak,
                sevdiğiniz anime serilerini 4K kalite ve Türkçe dublajla
                zenginleştirerek sizlere sunuyoruz.
                <br />
                <br />
                Amacımız, anime dünyasının büyüsünü en yüksek görüntü kalitesi
                ve en iyi seslendirme deneyimi ile birleştirmek.
                <br />
                <br />
                Geçmişten günümüze kadar uzanan anime mirasını koruyor, sizlerle
                yeniden buluşturuyoruz. Her zaman daha iyisini hedefleyen
                hizmet anlayışımızla, animeyi en iyi haliyle yaşamanız için
                buradayız!
              </p>

              <h6 className="mb-2 font-semibold">Bizi takip et</h6>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://discord.gg/anizium"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Discord"
                  >
                    <img
                      src="https://anizium.com/assets/index-assets/img/footer/discord.svg"
                      alt="Discord"
                      className="w-8"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/anizium"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <img
                      src="https://anizium.com/assets/index-assets/img/footer/instagram.svg"
                      alt="Instagram"
                      className="w-8"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Sağ Alan */}
            <div className="lg:w-1/2 w-full">
              <h6 className="text-lg font-semibold mb-2">Üye Olmak Ücretsiz!</h6>
              <p className="mb-4 text-sm">
                Yeni bölüm bildirimleri, kaldığın yerden devam et ve daha fazlası.
              </p>

              <form id="Index_Footer_Register_Form" onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                  <input
                    type="email"
                    id="footer_email"
                    className="p-2 w-full rounded-l-md text-black"
                    placeholder="email@adresin.com"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600 transition">
                    <i class="fa-solid fa-user-plus"></i>
                  </button>
                </div>
              </form>

              <p className="mt-4 text-sm">
                <b>aniziumdestek@gmail.com</b> üzerinden bizlerle iletişime geçebilirsiniz.
              </p>

              <img
                src="https://anizium.com/assets/index-assets/img/footer/visa-mastercard.webp"
                alt="Ödeme yöntemleri"
                className="mt-4 w-40"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Footer Alt Kısım */}
      <div className="bg-black py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-sm">
          <span>© Anizium, 2024 - Tüm hakları saklıdır.</span>
          <div className="flex gap-4 mt-2 lg:mt-0">
            <a href="/privacy-policy" title="Gizlilik Politikası" className="hover:underline">
              Gizlilik Politikası
            </a>
            <a href="/comment-policy" title="Yorum Politikası" className="hover:underline">
              Yorum Politikası
            </a>
            <a href="/tos" title="Şartlar ve Koşullar" className="hover:underline">
              Şartlar ve Koşullar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
