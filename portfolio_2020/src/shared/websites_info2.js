import imgNatalieMiles from "@/assets/nm_web.jpg";
import imgBridesphilly from "@/assets/bbp_web.jpg";
import imgLyassociates from "@/assets/lya_web.jpg";
import imgEasynoa from "@/assets/en_web.jpg";
import imgGlmortgage from "@/assets/glm_web.jpg";

const nataliemiles = [{
        id: 1,
        name: 'Natalie Miles',
        href: 'https://natalie-miles.com/',
        link: 'nataliemiles',
        img: imgNatalieMiles,
        desc: '',
        tags: '',
        date: '2019',
        before: undefined,
        after: 'beautifulbridesphilly'
    }];

const beautifulbridesphilly = [{ 
        id: 2,
        name: 'Beautiful Brides Philly',
        href: 'https://beautifulbridesphilly.com/',
        link: 'beautifulbridesphilly',
        img: imgBridesphilly,
        desc: '',
        tags: '',
        date: '2019',
        before: 'nataliemiles',
        after: 'geoffleemortgage'
    }]

const geoffleemortgage = [{
        id: 3,
        name: 'Geoff Lee Mortgage',
        href: 'https://www.geoffleemortgage.com/',
        link: 'geoffleemortgage',
        img: imgGlmortgage,
        desc: '',
        tags: '',
        date: '2018',
        before: 'beautifulbridesphilly',
        after: 'lyassociates'
    }]

const lyassociates = [{
        id: 4,
        name: 'Ly & Associates',
        href: 'https://lyandassociatesfg.com/',
        link: 'lyassociates',
        img: imgLyassociates,
        desc: '',
        tags: '',
        date: '2019',
        before: 'geoffleemortgage',
        after: 'easynoa'
    }]

const easynoa = [{
        id: 5,
        name: 'Easy NOA',
        href: 'https://www.easynoa.ca/',
        link: 'easynoa',
        img: imgEasynoa,
        desc: '',
        tags: '',
        date: '2018',
        before: 'lyassociates',
        after: undefined
    }]

export default {nataliemiles, beautifulbridesphilly, geoffleemortgage, lyassociates, easynoa};