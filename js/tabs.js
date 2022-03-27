document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path
    
          document.querySelectorAll('.tab-content').forEach(function(tabContent) {
              tabContent.classList.remove('tab-content-active')
          })
          document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tabs__btn--default')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
          this.classList.add('tabs__btn--default');
     
    })
    
    });
  
  });
