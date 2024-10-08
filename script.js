document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        header: {
            logo: {
                src: "logo.png",
                alt: "Company Logo",
            },
            menu: [
                { text: "Shop", url: "/shop" },
                { text: "Brands", url: "/brands" },
                { text: "Contact Us", url: "/contact us" },
            ],
            button: {
                text: "Sign Up",
                url: "/signup",
            },
        },
        homepage: {
            slider: [
                {
                    heading: "Exquisite Watches",
                    subheading: "Gold Luxury, ",
                    span: "Choose Us",
                    description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    price: "$499.00",
                    image: {
                        src: "image1.png",
                        alt: "Featured Product 1",
                    },
                    backgroundColor: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)",
                },
                {
                    heading: "Dainty Timepieces",
                    subheading: "Silver Luxury, ",
                    span: "Choose Us",
                    description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
                    price: "$469.00",
                    image: {
                        src: "image2.png",
                        alt: "Featured Product 2",
                    },
                    backgroundColor: "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)",
                },
                {
                    heading: "Elegant Timepieces",
                    subheading: "Choose Luxury, ",
                    span: "Choose Us",
                    description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
                    price: "$529.00",
                    image: {
                        src: "image3.png",
                        alt: "Featured Product 3",
                    },
                    backgroundColor: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)",
                },
                {
                    heading: "Refined Timepieces",
                    subheading: "Choose Luxury, ",
                    span: "Choose Us",
                    description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
                    price: "$469.00",
                    image: {
                        src: "image4.png",
                        alt: "Featured Product 4",
                    },
                    backgroundColor: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)",
                },
            ],
            socialMediaIcons: [
                {
                    platform: "Facebook",
                    url: "https://www.facebook.com",
                    icon: "facebook.png",
                },
                {
                    platform: "Twitter",
                    url: "https://www.twitter.com",
                    icon: "twitter.png",
                },
                {
                    platform: "Youtube",
                    url: "https://www.youtube.com",
                    icon: "youtube.png",
                },
            ],
        },
    };

    // Set header content
    const logoImg = document.querySelector(".header__logo img");
    if (logoImg) {
        logoImg.src = jsonData.header.logo.src;
        logoImg.alt = jsonData.header.logo.alt;
    }

    const menu = document.getElementById("header__menu");
    if (menu) {
        jsonData.header.menu.forEach((item) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.url;
            a.textContent = item.text;
            a.classList.add("hover:text-gray-600", "font-semibold");
            li.appendChild(a);
            menu.appendChild(li);
        });
    }

    const button = document.querySelector(".px-4.py-2.bg-black.text-white.rounded-full");
    if (button) {
        button.href = jsonData.header.button.url;
        button.textContent = jsonData.header.button.text;
    }

    // Set slider content
    const splideList = document.getElementById("splide-list");
    if (splideList) {
        jsonData.homepage.slider.forEach((item) => {
            const slide = document.createElement("li");
            slide.classList.add("splide__slide");
            slide.style.backgroundColor = item.backgroundColor;
            slide.style.background = item.backgroundColor;
            slide.innerHTML = `
            <div class="flex items-center justify-between p-12 max-w-full -mt-12">
                <div class="content text-left max-w-xl">
                    <h2 class="text-5xl font-bold text-white">${item.heading}</h2>
                    <h3 class="text-2xl mt-2 text-white">${item.subheading}<span class="text-black font-bold">${item.span}</span></h3>
                    <p class="mt-6 text-black">${item.description}</p>
                    <div class="price text-4xl mt-4 font-bold text-white">${item.price}</div>
                </div>
                <div class="image flex justify-end mt-10 ml-8 mr-40">
                    <img src="${item.image.src}" alt="${item.image.alt}" class="w-auto h-57 object-cover">
                </div>
            </div>
        `;
            splideList.appendChild(slide);
        });
    }

    // Inject social media icons
    const socialIconsContainer = document.getElementById("social-icons");
    if (socialIconsContainer) {
        jsonData.homepage.socialMediaIcons.forEach((iconData) => {
            const a = document.createElement("a");
            a.href = iconData.url;
            a.target = "_blank";
            a.innerHTML = `<img src="${iconData.icon}" alt="${iconData.platform} icon" class="flex items-center justify-center w-10 h-10 rounded-full border border-white-400 p-3">`;
            socialIconsContainer.appendChild(a);
        });
    }

    // Initialize Splide slider
    const slider = new Splide("#dynamic__slider", {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: true,
    }).mount();

    // Change background color based on active slide's background color
    slider.on("moved", function () {
        const activeSlideIndex = slider.index;
        const activeSlide = jsonData.homepage.slider[activeSlideIndex];
        const homepage = document.querySelector("body");

        if (homepage) {
            homepage.style.transition = "background-color 0.5s ease";

            setTimeout(() => {
                homepage.style.backgroundColor = activeSlide.backgroundColor;
                homepage.style.background = activeSlide.backgroundColor;
            }, 10);
        }
    });

    // Trigger the 'moved' event to set initial background color
    slider.emit("moved");
});
