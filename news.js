const api_key = "pub_ba1a5e6f516a406187c342a800a34d67";

const form = document.querySelector(".input");
const tit = document.querySelector(".title");
const desc = document.querySelector(".desc");
const dt = document.querySelector(".date");
const categoryText = document.querySelector(".cat");
const countr = document.querySelector(".count");
const lang = document.querySelector(".language");
const image = document.querySelector(".image");
const link = document.querySelector(".link");

const select = document.querySelector("#category");
const countrySelect = document.querySelector("#country");
const languageSelect = document.querySelector("#language");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedCategory = select.value;
    const country = countrySelect.value;
    const language = languageSelect.value;

    let url = `https://newsdata.io/api/1/latest?apikey=${api_key}`;

    if (selectedCategory) {
        url += `&category=${selectedCategory}`;
    }

    if (country) {
        url += `&country=${country}`;
    }

    if (language) {
        url += `&language=${language}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {

            const news = data.results[0]; // still first news only

            tit.innerHTML = "TITLE: " + news.title;
            desc.innerHTML = "DESCRIPTION: " + news.description;
            dt.innerHTML = "DATE: " + news.pubDate;
            countr.innerHTML = "COUNTRY: " + news.country;
            lang.innerHTML = "LANGUAGE: " + news.language;
            categoryText.innerHTML = "CATEGORY: " + news.category;

            if (news.image_url) {
                image.src = news.image_url;
            }

            link.innerHTML = `<a href="${news.link}" target="_blank">Read Full News</a>`;
        });
});
