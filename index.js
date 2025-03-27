function $(id) { return document.getElementById(id) }

(function() {
    if (!location.hash) {
        location.hash = '#home';
    }

    if (window.RogueMon) {
        var source = $('source'),
            rogueMon = $('rogueMon');
        
        source.onscroll = function() {
            rogueMon.scrollTop = source.scrollTop;
        }
    }

    window.onhashchange = function() {
        var target, page, previousPage;
        
        if (location.hash) {
            page = target = document.querySelector(location.hash);
            
            while (page && page.className != 'page') {
                page = page.parentNode;
            }
        }
        
        (previousPage = document.querySelector('.current.page')) && (previousPage.className = 'page');
        
        if (page) {
            page.className = 'current page';
            document.body.className = 'in-page';
        } else {
            document.body.className = 'home';
        }

        if (target) {
            target.scrollIntoView(true);
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        const headers = document.querySelectorAll('.rulesSections-group-header');
        
        headers.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isOpen = content.style.display === 'block';
                
                document.querySelectorAll('.rulesSections-content').forEach(item => {
                    item.style.display = 'none';
                });
                
                content.style.display = isOpen ? 'none' : 'block';
            });
        });
    });

    window.onhashchange();
})();