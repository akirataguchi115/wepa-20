const courseSettings = {
  language: "fi",
  name: "Web-palvelinohjelmointi Java 2020",
  siteUrl: "https://web-palvelinohjelmointi-20.mooc.fi",
  subtitle: "Opi tekemään verkossa toimivia sovelluksia",
  slug: "web-palvelinohjelmointi-20",
  tmcCourse: "wepa-2020",
  quizzesId: "898a77e2-7997-4613-b294-815a48d0e64b",
  tmcOrganization: "mooc",
  bannerPath: "banner.jpg",
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    {
      title: "Osaamistavoitteet",
      path: "/osaamistavoitteet",
    },
    {
      title: "Arvostelu ja kokeet",
      path: "/arvostelu-ja-kokeet",
    },
    { title: "Tukiväylät", path: "/tukivaylat" },
    { title: "Projekti", path: "/projekti"},
    {
      title: "Usein kysytyt kysymykset",
      path: "/usein-kysytyt-kysymykset",
    },
    { separator: true, title: "Web-palvelinohjelmointi Java" },
  ],
  sidebarFuturePages: [
//    { title: "Osa 1", tba: "10.03.20" },
//    { title: "Osa 2", tba: "10.03.20" },
//    { title: "Osa 3", tba: "10.03.20" },
//    { title: "Osa 4", tba: "24.03.20" },
//    { title: "Osa 5", tba: "24.03.20" },
//    { title: "Osa 6", tba: "24.03.20" },
//    { title: "Osa 7", tba: "24.03.20" },
  ],
  splitCourses: false,
}

module.exports = {
  default: courseSettings,
}
