        document.getElementById('servicesLink').addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.dropdown').classList.toggle('show');
        });
    
        document.getElementById('mobileServicesLink').addEventListener('click', function(event) {
            event.preventDefault();
            let dropdown = this.nextElementSibling;
            dropdown.classList.toggle('hidden');
        });
    
        document.addEventListener('click', function(event) {
            let dropdown = document.querySelector('.dropdown');
            let servicesLink = document.getElementById('servicesLink');
    
            if (!dropdown.contains(event.target) && event.target !== servicesLink) {
                dropdown.classList.remove('show');
            }
        });
    
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            let mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // toggle mobile services dropdown
        document.getElementById('mobileServicesLink').addEventListener('click', function(event) {
            event.preventDefault();
            let dropdown = this.nextElementSibling;
            dropdown.classList.toggle('hidden');
        });

        document.addEventListener("DOMContentLoaded", function () {
            const servicesLink = document.getElementById("servicesLink");
            const servicesDropdown = document.getElementById("servicesDropdown");

            servicesLink.addEventListener("click", function (event) {
                event.preventDefault(); // prevent default link behavior
                servicesDropdown.classList.toggle("hidden"); // toggle visibility
            });

            // close dropdown when clicking outside
            document.addEventListener("click", function (event) {
                if (!servicesDropdown.contains(event.target) && event.target !== servicesLink) {
                    servicesDropdown.classList.add("hidden");
                }
            });
        });

        const searchToggle = document.getElementById('search-toggle');
        const searchContainer = document.getElementById('search-container');
        const closeSearch = document.getElementById('close-search');
        const searchInput = document.getElementById('search-input');

        function openSearch() {
            searchContainer.style.display = 'flex'; 
            setTimeout(() => {
                searchContainer.classList.add('active');
                searchInput.focus(); 
            }, 10);
        }

        
        function closeSearchBox() {
            searchContainer.classList.remove('active');
            setTimeout(() => {
                searchContainer.style.display = 'none';
            }, 200);
        }

        searchToggle.addEventListener('click', function (event) {
            event.stopPropagation();
            if (searchContainer.classList.contains('active')) {
                closeSearchBox();
            } else {
                openSearch();
            }
        });

        closeSearch.addEventListener('click', closeSearchBox);

        document.addEventListener('click', function(event) {
            if (!searchContainer.contains(event.target) && event.target !== searchToggle) {
                closeSearchBox();
            }
        });
