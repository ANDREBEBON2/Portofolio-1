import Image from "next/image";
import Link from "next/link";
import ScrollAnimate from "@/Component/Hooks/ScrollAnimation";

import { useEffect } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
import { gsap } from "gsap";
import Head from "next/head";

export default function Home() {
  const container = "container mx-auto px-3 sm:px-5 md:px-7 lg:px-10";
  const { ref: homeRef, isVisible: homeInvisible } = ScrollAnimate(0.2);
  //GSAP
  useEffect(() => {
    gsap.from(".master", {
      // opacity: 100,
      // x: 10,
      // duration: 3,
      // ease: 'power2.Out',
      // stagger: 0.2
    });
  });

  //AOS
  useEffect(() => {
    const skillImage = document.querySelectorAll(".skillImage");
    const SMdeskripsi = document.querySelectorAll(".SMdeskripsi");
    const MDdeskripsi = document.querySelectorAll(".MDdeskripsi");
    const sertifikat = document.querySelectorAll(".sertifikat");
    (skillImage as NodeListOf<HTMLImageElement>).forEach((img, i) => {
      img.dataset.aos = "fade-up";
      img.dataset.aosDuration = "1000";
      img.dataset.aosDelay = `${i * 50}`;
    });

    (SMdeskripsi as NodeListOf<HTMLImageElement>).forEach((sm, a) => {
      sm.dataset.aos = "fade-up";
      sm.dataset.aosDuration = `400`;
      sm.dataset.aosDelay = `${a * 150}`;
    });
    (MDdeskripsi as NodeListOf<HTMLImageElement>).forEach((md, b) => {
      md.dataset.aos = "flip-left";
      md.dataset.aosDuration = "1200";
      md.dataset.deaosDelay = `${b * 200}`;
    });
    (sertifikat as NodeListOf<HTMLImageElement>).forEach((sr, c) => {
      sr.dataset.aos = "fade-up";
      sr.dataset.aosDuration = "1000";
      sr.dataset.deaosDelay = `${c * 400}`;
    });

    AOS.init({
      offset: 50,
    });
  });

  return (
    <div>
      <Head>
        <title>AB Portofolio</title>
      </Head>
      {/* Home */}
      <section id="Home" ref={homeRef} className="h-screen pt-20 group">
        <div
          className={`${container} h-full grid max-md:grid-rows-2 md:grid-cols-2 gap-1`}
        >
          <div className="grid grid-rows-[2fr_1fr] gap-1">
            <div className="flex items-end">
              {/* scale-0 group-target:scale-100 transition duration-150 ease-in-out */}
              <div className="">
                <h2
                  className={`transition-all duration-1000 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  } text-4xl md:text-5xl font-bold text-primary`}
                >
                  Hello,
                </h2>
                <h1
                  className={`transition-all duration-1050 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  } text-5xl md:text-6xl font-extrabold`}
                >
                  I Am Andre Bebon
                </h1>
                <p
                  className={`transition-all duration-1200 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  } font-medium`}
                >
                  <span className="text-primary font-bold">
                    Backend Developer{" "}
                  </span>{" "}
                  || Frontend Developer || UI UX Designer || Experience working
                  with Microsoft
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center max-md:items-center gap-1">
              {/* MD TO LG */}
              <div className={`flex gap-3.5 max-md:hidden`}>
                <div
                  className={`transition-all duration-1300 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <a href="https://github.com/ANDREBEBON2" target="_blank">
                    <Image
                      src={"/SVG/Github-bulat.svg"}
                      alt="github"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1400 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <a href="">
                    <Image
                      src={"/SVG/LinkIn.svg"}
                      alt="github"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1500 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <a
                    href="https://www.instagram.com/aryanto_892/profilecard/?igsh=dzVubHFoMXZvenp6"
                    target="_blank"
                  >
                    <Image
                      src={"/SVG/IG.svg"}
                      alt="github"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1600 transform ${
                    homeInvisible
                      ? "-translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <a
                    href="https://www.facebook.com/andre.bebon.7"
                    target="_blank"
                  >
                    <Image
                      src={"/SVG/FB.svg"}
                      alt="github"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
              </div>
              {/* END MD TO LG */}

              {/* MAX MD */}
              <div className={`flex gap-3.5 md:hidden`}>
                <div
                  className={`transition-all duration-1300 transform ${
                    homeInvisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  <a href="https://github.com/ANDREBEBON2" target="_blank">
                    <Image
                      src={"/SVG/Github-bulat.svg"}
                      alt="github"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1400 transform ${
                    homeInvisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  <a href="">
                    <Image
                      src={"/SVG/LinkIn.svg"}
                      alt="github"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1500 transform ${
                    homeInvisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  <a
                    href="https://www.instagram.com/aryanto_892/profilecard/?igsh=dzVubHFoMXZvenp6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/IG.svg"}
                      alt="github"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
                <div
                  className={`transition-all duration-1600 transform ${
                    homeInvisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                >
                  <a
                    href="https://www.facebook.com/andre.bebon.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/FB.svg"}
                      alt="github"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
              </div>
              {/* END MAX MD */}

              <div
                className={`transition-all duration-1700 transform ${
                  homeInvisible
                    ? "max-md:scale-100 md:-translate-x-0 opacity-100"
                    : "max-md:scale-0 md:-translate-x-20 opacity-0"
                }`}
              >
                <Link
                  href={
                    "https://drive.google.com/file/d/13zxq_ckSLGdhqLV0QXeEiPpqBL1uq4H-/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="py-2.5 font-semibold text-accent">
                    Download CV
                  </h5>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`master flex items-center justify-center max-md:hidden transition-all duration-1800 transform overflow-hidden rounded-full ${
              homeInvisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <Image
              src={"/images/ANDRE_340x400_PX.png"}
              alt=""
              height={600}
              width={600}
            />
          </div>

          <div
            className={`flex items-center justify-center md:hidden transition-all duration-1800 transform ${
              homeInvisible
                ? "-translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src={"/images/ANDRE_340x400_PX.png"}
              alt=""
              height={300}
              width={300}
            />
          </div>
        </div>
      </section>
      {/* End Home */}

      {/* ABOUT */}
      <section id="About" className="">
        {/* ABOUT ME */}
        <section className="bg-secondary">
          <div className={`${container} py-20 md:py-40`}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <h1
                className={`text-3xl md:text-4xl font-bold italic text-center uppercase`}
              >
                About
              </h1>
            </div>
            <div
              className="py-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <p className={`text-center font-semibold italic text-primary`}>
                &quot; Setiap baris kode adalah langkah kecil menuju solusi
                besar.&quot;
              </p>
            </div>
            <div
              className="py-5 md:px-40"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p
                className={`text-justify md:text-center font-semibold leading-loose`}
              >
                Saya Andreas Aryanto Bebon, mahasiswa akhir di Universitas
                Amikom Yogyakarta. Fokus saya di backend development (Laravel),
                namun kini saya mendalami Next.js untuk memperkuat kemampuan
                frontend. Terbiasa bekerja dalam tim, tepat waktu, dan memiliki
                pengalaman desain UI/UX menggunakan Figma & Adobe XD.
              </p>
            </div>
          </div>
        </section>
        {/* End ABOUT ME */}
      </section>
      {/* End ABOUT */}

      {/* SKILL */}
      <section id="Skill" className="relative">
        <div className={`${container} py-10 md:py-20 md:mb-32`}>
          <h1
            className={`text-3xl md:text-4xl font-bold italic text-center uppercase`}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Skill
          </h1>
          <div className="grid md:grid-cols-8 py-10">
            <div className="col-start-2 col-end-8 col-span-7 grid grid-cols-4 px-5 gap-y-14 max-md:gap-5">
              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/Microsoft.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/Figma.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/XD.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/GIT.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/HTML.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className="skillImage flex justify-center items-center">
                <Image
                  src={"/SVG/CSS.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className={` skillImage flex justify-center items-center`}>
                <Image
                  src={"/SVG/Javascript.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>

              <div className={`skillImage flex justify-center items-center`}>
                <Image
                  src={"/SVG/PHP.svg"}
                  alt="microsoft"
                  height={110}
                  width={110}
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION MD >+ */}
        <div className="absolute w-full top-full xl:top-[600px] max-md:hidden">
          <div className={`${container}`}>
            <div className="grid grid-cols-8 gap-1">
              <div className="col-start-2 col-span-6">
                <div className={`grid grid-cols-3 lg:gap-10 md:gap-5`}>
                  <div className="MDdeskripsi flex flex-col justify-center items-center bg-description rounded xl:py-10 py-2 xl:px-5 px-2 max-md:hover:scale-110 max-md:hover:bg-primary transition-all duration-300 ease-in-out">
                    <div className="mb-2">
                      <Image
                        src={"/SVG/Design.svg"}
                        alt="design"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="mb-2">
                      <h1 className="text-2xl font-extrabold">UI/UX Design</h1>
                    </div>
                    <div className="mb-2">
                      <p className="text-center font-semibold">
                        Selama 3 tahun Design UI/UX untuk tugas kuliah membuat
                        saya memiliki wawasan yang cukup luas tentang UI/UX
                        Design
                      </p>
                    </div>
                  </div>

                  <div className="MDdeskripsi flex flex-col justify-center items-center bg-description rounded xl:py-10 py-2 xl:px-5 px-2 max-md:hover:scale-110 max-md:hover:bg-primary transition duration-300 xl:scale-110">
                    <div className="mb-2">
                      <Image
                        src={"/SVG/FE.svg"}
                        alt="design"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="mb-2">
                      <h1 className="text-2xl font-extrabold">
                        Front End Development
                      </h1>
                    </div>
                    <div className="mb-2">
                      <p className="text-center font-semibold">
                        Selama 3 tahun membuat tampilan website untuk tugas
                        kuliah dan projek membuat wawasan saya cukup luas
                        tentang Front End.
                      </p>
                    </div>
                  </div>

                  <div className="MDdeskripsi flex flex-col justify-center items-center bg-description rounded xl:py-10 py-2 xl:px-5 px-2 max-md:hover:scale-110 max-md:hover:bg-primary transition duration-300">
                    <div className="mb-2">
                      <Image
                        src={"/SVG/backend.svg"}
                        alt="design"
                        height={130}
                        width={130}
                      />
                    </div>
                    <div className="mb-2">
                      <h1 className="text-2xl font-extrabold">
                        Backend Development
                      </h1>
                    </div>
                    <div className="mb-2">
                      <p className="text-center font-semibold">
                        Selama 3 tahun berfokus pada backend membuat logika dan
                        wawasan saya berkembang mengenai Backend.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End DESCRIPTION >+ */}

        {/* DESCRIPTION MAX SM */}
        <section className="bg-secondary md:hidden">
          <div className={`${container}`}>
            <div className="bg-secondary flex justify-center py-2 px-2 ">
              <div className="-mt-8 flex flex-col gap-5 mb-5 ">
                <div
                  className={`SMdeskripsi bg-description rounded-md drop-shadow-2xl py-2 px-3 flex flex-col items-center`}
                >
                  <div className="mb-2">
                    <Image
                      src={"/SVG/Design.svg"}
                      alt="design"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="mb-2">
                    <h1 className="text-2xl font-extrabold">UI/UX Design</h1>
                  </div>
                  <div className="mb-2">
                    <p className="text-center font-semibold">
                      Selama 3 tahun Design UI/UX untuk tugas kuliah membuat
                      saya memiliki wawasan yang cukup luas tentang UI/UX Design
                    </p>
                  </div>
                </div>

                <div
                  className={`SMdeskripsi bg-description rounded-md drop-shadow-2xl py-2 px-3 flex flex-col items-center`}
                >
                  <div className="mb-2">
                    <Image
                      src={"/SVG/FE.svg"}
                      alt="design"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="mb-2">
                    <h1 className="text-2xl font-extrabold">
                      Front End Development
                    </h1>
                  </div>
                  <div className="mb-2">
                    <p className="text-center font-semibold">
                      Selama 3 tahun membuat tampilan website untuk tugas kuliah
                      dan projek membuat wawasan saya cukup luas tentang Front
                      End.
                    </p>
                  </div>
                </div>

                <div
                  className={`SMdeskripsi bg-description rounded-md drop-shadow-2xl py-2 px-3 flex flex-col items-center`}
                >
                  <div className="mb-2">
                    <Image
                      src={"/SVG/backend.svg"}
                      alt="design"
                      height={100}
                      width={100}
                    />
                  </div>
                  <div className="mb-2">
                    <h1 className="text-2xl font-extrabold">
                      Backend Development
                    </h1>
                  </div>
                  <div className="mb-2">
                    <p className="text-center font-semibold">
                      Selama 3 tahun berfokus pada backend membuat logika dan
                      wawasan saya berkembang mengenai Backend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End DESCRIPTION MAX SM */}
      </section>
      {/* End SKILL */}

      {/* CERTIFICATE */}
      <section id="Certificate" className="md:bg-secondary">
        <div className={`${container} py-10 md:pt-56 xl:pt-28`}>
          <div className="sertifikat xl:mt-60 md:mt-40">
            <h1
              className={`text-3xl md:text-4xl font-bold italic text-center uppercase`}
            >
              CERTIFICATE
            </h1>
          </div>
          <div className={`container flex flex-col items-center py-5 gap-y-10`}>
            {/* CERTIFICATE IMAGE */}
            <div className="grid grid-cols-2 gap-2">
              <div className="sertifikat rounded-2xl overflow-hidden">
                <Image
                  src={"/images/API.png"}
                  alt="sertifikat belajar Resh API"
                  height={500}
                  width={500}
                />
              </div>
              <div className="sertifikat rounded-2xl overflow-hidden">
                <Image
                  src={"/images/CMD.png"}
                  alt="sertifikat belajar CMD"
                  height={500}
                  width={500}
                />
              </div>
              <div className="sertifikat rounded-2xl overflow-hidden">
                <Image
                  src={"/images/LARVEL.png"}
                  alt="sertifikat belajar Laravel"
                  height={500}
                  width={500}
                />
              </div>
              <div className="sertifikat rounded-2xl overflow-hidden">
                <Image
                  src={"/images/MYSQL.png"}
                  alt="sertifikat belajar MYSQL"
                  height={500}
                  width={500}
                />
              </div>
            </div>
            {/* End CERTIFICATE IMAGE */}

            {/* BUTTON TO LINKIN */}
            <div
              className={`sertifikat container flex flex-col items-center py-5 gap-y-10`}
            >
              <a href="#" className="flex gap-2 group">
                <Image
                  src={"/SVG/LinkIn.svg"}
                  alt="linkin logo"
                  height={30}
                  width={30}
                  className="md:block hidden"
                />
                <Image
                  src={"/SVG/LinkIn.svg"}
                  alt="linkin logo"
                  height={20}
                  width={20}
                  className="hidden max-md:block"
                />
                <span className="text-sm md:text-xl font-semibold italic group-hover:text-primary">
                  More In LinkedIn
                </span>
              </a>
            </div>
            {/* End BUTTON KE LINKIN */}
          </div>
        </div>
      </section>
      {/* End CERTIFICATE */}

      {/* PORTOFOLIO */}
      <section id="Portofolio" className="md:bg-transparent bg-secondary">
        <div className={`${container} py-20 md:py-32 xl:py-40`}>
          <div className="">
            <h1
              className={`text-3xl md:text-4xl font-bold italic text-center`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Galeri Portofolio
            </h1>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 py-5 mt-5">
              <div
                className={`flex justify-center items-center overflow-hidden rounded-md`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <Image
                  src={"/images/ST.png"}
                  alt="Paroki Waimarama"
                  height={2800}
                  width={2800}
                  className="w-full h-full"
                />
              </div>

              <div
                className={`flex justify-center items-center overflow-hidden rounded-md`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={"/images/ss.png"}
                  alt="Shoes Store"
                  height={2800}
                  width={2800}
                  className="w-full h-full"
                />
              </div>

              <div
                className={`flex justify-center items-center overflow-hidden rounded-md md:col-span-2`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="150"
              >
                <Image
                  src={"/images/JO.png"}
                  alt="JE Oficial Brand"
                  height={2800}
                  width={2800}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End PORTOFOLIO */}

      {/* FOOTHER */}
      <section id="Contact" className="md:bg-description bg-transparent">
        <footer className={`${container} py-5`}>
          <div className="container md:w-1/2 mx-auto">
            <div className="flex justify-center items-center mb-6">
              <div className="md:h-20 h-12 md:w-20 w-12 overflow-hidden object-cover bg-red-700 flex items-center justify-center rounded-full">
                <Image src={"/favicon.png"} alt="LOGO" height={70} width={70} />
              </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-2">
              <div className="flex justify-center items-center gap-5">
                <div className="max-md:h-7 max-md:w-7 group">
                  <a
                    href="https://www.instagram.com/aryanto_892/profilecard/?igsh=dzVubHFoMXZvenp6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/IG.svg"}
                      alt="LinkedIn"
                      height={40}
                      width={40}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="max-md:h-7 max-md:w-7 group">
                  <a
                    href="https://www.facebook.com/andre.bebon.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/FB.svg"}
                      alt="LinkedIn"
                      height={40}
                      width={40}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="max-md:h-7 max-md:w-7 group">
                  <a
                    href="https://wa.me/6282328606977"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/WA.svg"}
                      alt="LinkedIn"
                      height={40}
                      width={40}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="max-md:h-7 max-md:w-7 group">
                  <a
                    href="mailto:andrebebon21@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/SVG/MAIL.svg"}
                      alt="LinkedIn"
                      height={40}
                      width={40}
                      className="group-hover:scale-110 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
              {/* <div>
                <h1 className="max-md:text-sm font-semibold italic text-primary text-center">Contact Me</h1>
              </div> */}
              <div className="py-1">
                <p className="text-center max-sm:text-sm">
                  &copy; 2025 ABportofolio. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {/* END FOOTHER */}
    </div>
  );
}
