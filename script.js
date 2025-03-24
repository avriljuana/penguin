document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.getElementById("servicesLink");
    const servicesDropdown = document.getElementById("servicesDropdown");

    servicesLink.addEventListener("click", function (event) {
        event.preventDefault();
        servicesDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!servicesDropdown.contains(event.target) && event.target !== servicesLink) {
            servicesDropdown.classList.add("hidden");
        }
    });

    const mobileServicesToggle = document.getElementById("mobile-services-toggle");
    const mobileServicesDropdown = document.getElementById("mobile-services-dropdown");

    mobileServicesToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileServicesDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!mobileServicesDropdown.contains(event.target) && event.target !== mobileServicesToggle) {
            mobileServicesDropdown.classList.add("hidden");
        }
    });

    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    const searchToggle = document.getElementById("search-toggle");
    const searchContainer = document.getElementById("search-container");
    const closeSearch = document.getElementById("close-search");
    const searchInput = document.getElementById("search-input");

    function openSearch() {
        searchContainer.style.display = "flex";
        setTimeout(() => {
            searchContainer.classList.add("active");
            searchInput.focus();
        }, 10);
    }

    function closeSearchBox() {
        searchContainer.classList.remove("active");
        setTimeout(() => {
            searchContainer.style.display = "none";
        }, 200);
    }

    searchToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        if (searchContainer.classList.contains("active")) {
            closeSearchBox();
        } else {
            openSearch();
        }
    });

    closeSearch.addEventListener("click", closeSearchBox);

    document.addEventListener("click", function (event) {
        if (!searchContainer.contains(event.target) && event.target !== searchToggle) {
            closeSearchBox();
        }
    });

    const searchMap = {
        "home": "index.html#hero",
        "services": "services.html",
        "bridal": "services.html#bridal",
        "towing": "services.html#towing",
        "trucking": "services.html#trucking",
        "heavy equipment": "services.html#heavy",
        "construction": "services.html#general",
        "furniture": "services.html#furniture",
        "auto parts": "services.html#auto",
        "contact": "contact.html"
    };

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {
            alert("Please enter a search term.");
            return;
        }

        for (let key in searchMap) {
            if (query.includes(key)) {
                window.location.href = searchMap[key];
                return;
            }
        }

        alert("No matching section found.");
    }

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    const mobileSearchToggle = document.getElementById("mobile-search-toggle");
    const mobileSearchContainer = document.getElementById("mobile-search-container");
    const mobileCloseSearch = document.getElementById("mobile-close-search");
    const mobileSearchInput = document.getElementById("mobile-search-input");

    function openMobileSearch() {
        mobileSearchContainer.classList.remove("hidden");
        mobileSearchInput.focus();
    }

    function closeMobileSearch() {
        mobileSearchContainer.classList.add("hidden");
    }

    mobileSearchToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        openMobileSearch();
    });

    mobileCloseSearch.addEventListener("click", closeMobileSearch);

    document.addEventListener("click", function (event) {
        if (!mobileSearchContainer.contains(event.target) && event.target !== mobileSearchToggle) {
            closeMobileSearch();
        }
    });

    function performMobileSearch() {
        const query = mobileSearchInput.value.trim().toLowerCase();

        if (query === "") {
            alert("Please enter a search term.");
            return;
        }

        for (let key in searchMap) {
            if (query.includes(key)) {
                window.location.href = searchMap[key];
                return;
            }
        }

        alert("No matching section found.");
    }

    mobileSearchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            performMobileSearch();
        }
    });
});
