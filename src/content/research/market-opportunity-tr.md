# Glamy Pazar Fırsatı

## Metodoloji

Glamy'nin pazar fırsatı ağırlıklı olarak aşağıdan yukarıya (bottom-up) bir yaklaşımla modellenmiştir.

Model, geniş bir yapay zeka veya yazılım pazarına keyfi bir oran uygulamak yerine, Glamy'nin operasyonel profiline uyan kuruluşların sayısından hareket eder ve bu kuruluşların yaratabileceği yinelenen yazılım gelirini tahmin eder.

Model üç tür girdiyi birbirinden ayırır:

- Dış kaynaklı veriler — istatistik kurumları ve sektör kaynakları tarafından yayımlanan kuruluş sayıları, otel kapasitesi, şirket ölçeği dağılımları ve pazar yapısı verileri.
- Glamy varsayımları — doğrudan karşılaştırılabilir kamu verisinin bulunmadığı durumlarda kullanılan ICP filtreleri, normalize edilmiş yıllık sözleşme değerleri ve ölçekleme tahminleri.
- Bağımsız pazar göstergeleri — ajan tabanlı ve operasyonel yapay zekaya doğru yaşanan daha geniş dönüşümü doğrulamak için kullanılan üçüncü taraf tahminleri. Bu göstergeler, Glamy'nin aşağıdan yukarıya pazar büyüklüğü hesabına doğrudan dahil edilmemiştir.

Tüm rakamlar yuvarlanmıştır ve Glamy'nin gelecekteki gelir tahminleri olarak değil, modellenmiş pazar fırsatları olarak değerlendirilmelidir.

---

## €8 Milyar TAM

### Dünya genelinde hizmet yoğun operasyonlar

Glamy'nin Toplam Adreslenebilir Pazarı (TAM), müşteri diyaloglarının operasyonel kararları ve gerçek dünyadaki aksiyonları tetikleyebildiği hizmet kuruluşlarını kapsar.

Temel ekonomik akış şöyledir:

> Diyalog → Bağlam → Muhakeme → Kurumsal Aksiyon

İlk model, konaklama, yolcu seyahati ve taşımacılığı, seyahat ve rezervasyon hizmetleri, tesis ve dağıtık destek operasyonları ile aynı temel operasyonel mimarinin uygulanabildiği benzer hizmet yoğun kategorilerdeki kuruluşları içerir.

### Aşağıdan yukarıya hesaplama

> ~315.000 adreslenebilir kuruluş
> ×
> ~€25.000 normalize edilmiş ağırlıklı ortalama yıllık sözleşme değeri
> = ~€7,9 milyar
> Yuvarlanmış değer: ~€8 milyar TAM

### Hangi veriler harici kaynaklara dayanıyor?

Eurostat Yapısal İş İstatistikleri, Avrupa'daki şirket yapısının ekonomik faaliyet ve şirket ölçeğine göre değerlendirilmesi için temel referansı sağlar.

Kaynak: [Eurostat — Yapısal İş İstatistikleri](https://ec.europa.eu/eurostat/web/structural-business-statistics)

2024 yılında AB iş dünyasında yaklaşık 251.000 orta ölçekli şirket (50–249 çalışan) ve 55.000 büyük şirket (250+ çalışan) bulunuyordu. Bu kuruluşlar şirketlerin yalnızca yaklaşık %1'ini oluşturmasına rağmen, istihdam ve cironun orantısız derecede büyük bir bölümünü temsil ediyordu.

Kaynak: [Eurostat — Şirket ölçeği dağılımı, 2024](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251209-2)

### Hangi veriler modellenmiştir?

315.000 kuruluşluk global adreslenebilir pazar, Eurostat tarafından yayımlanmış bir istatistik değil, Glamy'ye ait bir modelleme varsayımıdır.

Bu sayı, gözlemlenen Avrupa şirket yapısından hareketle dünya genelindeki hizmet yoğun kuruluş evrenini tahmin eder. Glamy'nin hedeflediği operasyonel özellikleri taşımayan hizmet ekonomisinin büyük bölümlerini kapsam dışında bırakır.

€25 binlik ağırlıklı ortalama ACV de Glamy'nin normalize edilmiş uzun vadeli fiyatlama varsayımıdır.

Şeffaflık açısından, mevcut model için makul hassasiyet aralığı yaklaşık olarak şöyledir:

> €4,5 milyar–€13,5 milyar. Baz senaryoda ~€8 milyar kullanılmıştır.

---

## €1,4 Milyar SAM

### Orta ve üst-orta ölçekli hizmet operasyonları

Hizmet Verilebilir Pazar (SAM), dünya genelindeki fırsatı Glamy'nin ilk hizmet dikeyleri ve kuruluş profiliyle sınırlar.

Mevcut ana kapsam şunları içerir:

- Otelcilik ve konaklama
- Yolcu seyahati ve taşımacılığı
- Seyahat ve rezervasyon hizmetleri
- Tesis ve dağıtık destek operasyonları

Odak noktası yalnızca “hizmet” olarak sınıflandırılan kuruluşlar değildir. Glamy, diyalog bağlamının hizmetin yerine getirilmesini, koordinasyonu veya karar alma süreçlerini etkileyebileceği ölçüde operasyonel karmaşıklığa sahip kuruluşları hedefler.

### Aşağıdan yukarıya hesaplama

> ~45.000 adreslenebilir kuruluş
> ×
> ~€30.000 normalize edilmiş yıllık sözleşme değeri
> = ~€1,35 milyar
> Yuvarlanmış değer: ~€1,4 milyar SAM

### Neden orta ve üst-orta ölçek?

Bu tercih hem operasyonel ekonomiyi hem de Glamy'nin ilk pazara giriş tezini yansıtır.

Çok küçük kuruluşlar genellikle daha düşük operasyonel karmaşıklığa ve daha sınırlı potansiyel sözleşme değerlerine sahiptir. Diğer uçta, çok büyük şirketler önemli değer yaratabilse de çoğu zaman daha uzun satın alma, yönetişim ve entegrasyon döngüleri getirir.

Bu nedenle ilk fırsat, anlamlı operasyonel karmaşıklık yaşayacak kadar büyük ancak ticari açıdan erişilebilir kuruluşlara odaklanır.

Eurostat verileri bu segmentin daha geniş ekonomik önemini destekler. 2022 yılında orta ölçekli şirketler AB'deki şirketlerin yalnızca %0,8'ini oluştururken istihdamın %15'ini temsil ediyordu. Büyük şirketler ise şirketlerin %0,2'sini oluşturmasına rağmen istihdamın %35'ini ve net cironun %50'sini sağlıyordu.

Kaynak: [Eurostat — KOBİ ve şirket ölçeğinin ekonomik katkısı](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20231212-1)

Turizm verileri de ilgili operasyonel sektörlerin ölçeğini gösterir. Eurostat'ın referans alınan AB turizm sektörü veri setine göre konaklamada yaklaşık 2,1 milyon, taşımacılıkta 1,8 milyon, seyahat acenteleri ve tur operatörlerinde ise 0,4 milyon kişi çalışmaktadır.

Kaynak: [Eurostat — Turizm sektörleri](https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20240529-1)

### Hangi veriler modellenmiştir?

~45 bin kuruluşluk evren, ilgili hizmet sektörlerinin kuruluş ölçeği ve operasyonel uygunluğa göre filtrelenmesiyle oluşturulmuş bir Glamy modelidir.

Bu sayı, Eurostat'ın yayımladığı resmi bir “Glamy tarafından adreslenebilir şirketler” verisi olarak yorumlanmamalıdır.

Benzer şekilde, €30 binlik normalize edilmiş ACV, Glamy'nin mevcut fiyatlamasını değil, bu karma hizmet kuruluşu portföyündeki olgun bir Glamy kurulumunun tahmini yıllık yazılım değerini temsil eder.

---

## €100 Milyon SOM

### Avrupa'da 200+ odalı oteller

Elde Edilebilir Pazar (SOM), Glamy'nin ilk odaklandığı dikeyi temsil eder: operasyonel açıdan karmaşık Avrupa otelleri.

Oda sayısı, otel kalitesi veya marka konumlandırmasına ilişkin bir ifade olarak değil, operasyonel karmaşıklığın göstergesi olarak kullanılır.

Mevcut eşik şöyledir:

> 200+ oda

Bu eşik, Avrupa'daki küçük konaklama tesislerinin büyük çoğunluğunu bilinçli olarak kapsam dışında bırakır ve modeli misafir hacmi, departmanlar arası koordinasyon ve operasyonel karmaşıklığın belirgin biçimde daha yüksek olduğu otellere odaklar.

### Aşağıdan yukarıya model

Mevcut model yaklaşık olarak şunu öngörür:

> Avrupa'da ~5.900–8.100 adet 200+ odalı tesis
> ×
> Tesis başına €15.000 normalize edilmiş yıllık ACV
> = yaklaşık €89 milyon–€122 milyon yıllık fırsat
> Baz senaryo ≈ €105 milyon
> Sunum için ihtiyatlı şekilde yuvarlanmış değer: ~€100 milyon SOM

### Önemli modelleme notu

Avrupa'daki kamuya açık konaklama istatistikleri, tam olarak 200+ odalı otellerin AB genelindeki toplam sayısını tutarlı biçimde tek bir veri olarak yayımlamamaktadır.

Bu nedenle model, yayımlanmış otel kapasitesi ve ölçek sınıfı verilerinden başlar ve mevcut ölçek dağılımlarını kullanarak 200+ odalı alt kümeyi tahmin eder.

Kaynaklar: [Eurostat — Konaklama kapasitesi ve ölçek sınıfları](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Tourism_statistics_-_annual_results_for_the_accommodation_sector) · [Eurostat — Turistik konaklama metodolojisi](https://ec.europa.eu/eurostat/cache/metadata/EN/tour_occ_esms.htm)

Bu, resmi bir Eurostat istatistiği değil, Glamy'ye ait bir modelleme adımıdır.

Daha ayrıntılı kapasite verilerinin bulunduğu durumlarda ülke bazındaki kaynaklar ek kalibrasyon noktaları olarak kullanılır.

Örneğin İtalya, 2024 yılında 32.943 otel işletmesi bildirmiştir. Bu sayı, temel otel evreninin ne kadar parçalı olduğunu göstermektedir.

Kaynaklar: [ISTAT — Turizm hareketleri ve konaklama yapısı, 2024](https://www.istat.it/comunicato-stampa/i-flussi-turistici-anno-2024/) · [ISTAT — Konaklama tesisi kapasite araştırması](https://www.istat.it/informazioni-sulla-rilevazione/capacita-degli-esercizi-ricettivi/)

### Normalize edilmiş otelcilik ACV'si

Modelde kullanılan değer:

> Tesis başına yıllık €15 bin
> Hassasiyet aralığı: yaklaşık €12 bin–€18 bin

Bu değer, 200+ odalı bir tesisteki olgun kurulum için Glamy'nin fiyatlama varsayımıdır. Sektör ortalaması olduğu iddia edilmemektedir.

Harici otelcilik yazılımı fiyatları yalnızca makullük kontrolü amacıyla kullanılır.

Örneğin Viqal, otellere yönelik yapay zeka ve mesajlaşma ürününü oda sayısına göre fiyatlandırmakta ve 500 odanın üzerindeki tesis ve grupları özel kurumsal fiyatlamaya yönlendirmektedir. Canary de misafir mesajlaşması, yapay zeka yanıtları ve otomatik hizmet talebi oluşturma gibi özellikleri içeren otelcilik platformunda özel fiyatlama kullanmaktadır.

Kaynaklar: [Viqal — Fiyatlandırma](https://www.viqal.com/pricing) · [Canary Technologies — Fiyatlandırma](https://secure.canarytechnologies.com/pricing) · [hotelkit — Fiyatlandırma ve SSS](https://hotelkit.net/faq/)

Bu karşılaştırmalar, oda sayısının ticari açıdan anlamlı bir fiyatlama değişkeni olduğunu destekler. Ancak Glamy'nin €15 binlik ACV varsayımını doğrudan belirlemez.

---

## ~€40 Milyon İlk Hedef Pazar

### İtalya · Türkiye · İspanya · Yunanistan

Glamy'nin ilk ticari odağı, Avrupa otelcilik pazarına ilişkin SOM'dan daha dardır.

İlk hedef pazar, İtalya, Türkiye, İspanya ve Yunanistan'daki 200+ odalı otelleri kapsar. Glamy'nin aşağıdaki unsurların en güçlü birleşimini beklediği orta ve üst-orta ölçekli kuruluşlara özellikle odaklanır:

- operasyonel karmaşıklık
- anlamlı müşteri etkileşimi hacmi
- karar vericilere erişim
- yeterli yazılım bütçesi
- küresel büyük ölçekli kurumsal projelere kıyasla daha düşük kurumsal süreç yükü

Kaynaklar: [T.C. Kültür ve Turizm Bakanlığı — Konaklama istatistikleri metodolojisi](https://yigm.ktb.gov.tr/TR-268376/metaveri.html) · [T.C. Kültür ve Turizm Bakanlığı — Aylık konaklama tesisi istatistikleri](https://engelsiz.ktb.gov.tr/TR-407335/2025-yili-aylik-bultenler.html) · [İspanya otel ölçeği dağılımı — Eurostat kaynaklı](https://www.statista.com/statistics/687488/number-of-hotels-and-similar-accommodation-by-number-of-rooms-in-spain/) · [Turizm Araştırma ve Tahmin Enstitüsü — Yunanistan Otelcilik Performansı 2024](https://www.itep.gr/wp-content/uploads/2025/06/AS_2024_site_public_en_revised.pdf) · [Greece in Numbers — Ölçeğe göre otel kapasitesi](https://www.greeceinnumbers.gr/en-gb/Sectors%20and%20Enterprises/Tourism/Capacity)

Mevcut modellenmiş fırsat yaklaşık olarak şöyledir:

> ~€40 milyon

Bu rakam, Glamy'nin otelcilik pazarının nihai büyüklüğü olarak değil, ilk pazara giriş fırsatı olarak değerlendirilmelidir.

Bu ayrım bilinçlidir:

> SOM ≈ €100 milyon — Avrupa'daki hizmet verilebilir otelcilik fırsatı.
> İlk Hedef Pazar ≈ €40 milyon — ilk coğrafi ve ticari odak.

---

## Bağımsız Pazar Göstergeleri

Yukarıdaki aşağıdan yukarıya hesaplamalarda geniş yapay zeka pazarı tahminleri bilinçli olarak kullanılmamıştır.

Bununla birlikte bağımsız araştırmalar, kurumsal yazılım pazarının Glamy'nin temel aldığı mimariye doğru ilerlediğini göstermektedir.

Kaynak: [Gartner — Kurumsal uygulamalarda ajan tabanlı yapay zeka ve uzun vadeli $450 milyar+ senaryosu](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025)

### Ajan tabanlı yapay zekanın etkisine açık $234 milyar kurumsal yazılım harcaması

Gartner, 2030 yılına kadar $234 milyara varan kurumsal uygulama harcamasının ajan arbitrajına açık hale geleceğini tahmin etmektedir. Bu tutar, kurumsal uygulama SaaS harcamalarının yaklaşık %20'sine karşılık gelmektedir.

Gartner, ajan arbitrajını yapay zeka ajanlarının birden fazla sistemde işi tamamlayarak kullanıcıların farklı geleneksel yazılım arayüzleriyle etkileşim kurma ihtiyacını azaltması olarak tanımlar.

Kaynak: [Gartner — Ajan tabanlı yapay zekanın etkisine açık $234 milyar kurumsal uygulama harcaması](https://www.gartner.com/en/newsroom/press-releases/2026-07-01-gartner-says-us-dollars-234-billion-in-enterprise-application-software-spend-is-at-risk-from-agentic-artificial-intelligence)

### Öngörülen $985 milyar ajan tabanlı yapay zeka yazılım harcaması

Gartner ayrıca ajan tabanlı yapay zeka yazılım harcamalarının 2025–2030 döneminde yıllık bileşik %62,7 büyüme oranıyla 2030'da $985 milyara ulaşacağını öngörmektedir.

Kaynak: [Gartner — Ajan tabanlı yapay zeka yazılım harcamaları tahmini, 2030'da $985 milyar](https://www.gartner.com/en/documents/7455226)

Bu rakam Glamy'nin TAM'ı değildir. Yalnızca daha geniş teknolojik dönüşümün ve yazılım harcamalarındaki değişimin bir göstergesi olarak sunulmuştur.

---

## Varsayımlar ve sınırlamalar

Bu pazar modeli, dış kaynaklardan alınan pazar yapısı verilerini Glamy'ye özgü varsayımlarla birleştirir. Kuruluş sayıları, otel kapasitesi ve şirket ölçeği dağılımları, mevcut olduğu ölçüde üçüncü taraf kaynaklara dayandırılmıştır. Adreslenebilirlik filtreleri, küresel ölçeklemeler ve normalize edilmiş ACV'ler Glamy varsayımlarıdır ve açıkça bu şekilde belirtilmiştir. Kamuya açık veri setleri, Glamy'nin ICP'si için gereken her veri kırılımını — özellikle Avrupa genelindeki 200+ odalı otellerin kesin sayısını — sağlamadığından, tahmini değerleri yayımlanmış istatistikler gibi sunmak yerine aralıklar ve şeffaf modelleme varsayımları kullanılmıştır. Pazar fırsatı, potansiyel yinelenen yazılım gelirini temsil eder. Gelir tahmini veya beklenen pazar payı olarak yorumlanmamalıdır.
