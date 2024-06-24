
const KremlinImg = new URL('https://images.unsplash.com/photo-1613325680001-dc618b2c0692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUQwJUIzJUQwJUJFJUQxJTgwJUQwJUJFJUQwJUI0JUQwJUIwJTIwJUQxJTgwJUQwJUJFJUQxJTgxJUQxJTgxJUQwJUI4JUQxJThGfGVufDB8fDB8fHww', import.meta.url);
const TransportImg = new URL('https://images.unsplash.com/photo-1590079019458-0eb5b40a3371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fCVEMCVCMyVEMCVCRSVEMSU4MCVEMCVCRSVEMCVCNCVEMCVCMCUyMCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHx8MA%3D%3D', import.meta.url);
const KhotkovoImg = new URL('https://images.unsplash.com/photo-1609067936529-59bf24113fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fCVEMCVCMyVEMCVCRSVEMSU4MCVEMCVCRSVEMCVCNCVEMCVCMCUyMCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHx8MA%3D%3D', import.meta.url);
const MetroImg = new URL('https://plus.unsplash.com/premium_photo-1694475285788-a9291fd5a25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHwlRDAlQjMlRDAlQkUlRDElODAlRDAlQkUlRDAlQjQlRDAlQjAlMjAlRDElODAlRDAlQkUlRDElODElRDElODElRDAlQjglRDElOEZ8ZW58MHx8MHx8fDA%3D', import.meta.url);
const SeaImg = new URL('https://images.unsplash.com/photo-1712530635946-e20081bb92a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fCVEMCVCMyVEMCVCRSVEMSU4MCVEMCVCRSVEMCVCNCVEMCVCMCUyMCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHx8MA%3D%3D', import.meta.url);
const MoscowCityMuseumImg = new URL('https://images.unsplash.com/photo-1614016296767-63446ab979c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fCVEMCVCMyVEMCVCRSVEMSU4MCVEMCVCRSVEMCVCNCVEMCVCMCUyMCVEMSU4MCVEMCVCRSVEMSU4MSVEMSU4MSVEMCVCOCVEMSU4RnxlbnwwfHwwfHx8MA%3D%3D', import.meta.url)

export const initialCards = [
    {
      name: "Кремль",
      link: KremlinImg,
    },
    {
      name: "Транспорт",
      link: TransportImg,
    },
    {
      name: "Хотьково",
      link: KhotkovoImg,
    },
    {
      name: "Метро",
      link: MetroImg,
    },
    {
      name: "Море",
      link: SeaImg,
    },
    {
      name: "Музей Москвы",
      link: MoscowCityMuseumImg,
    }
];