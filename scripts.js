document.getElementById('toggle-more').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        moreContent.classList.add('visible');
        this.textContent = '숨기기';
    } else {
        moreContent.classList.remove('visible');
        moreContent.classList.add('hidden');
        this.textContent = '더 읽기';
    }
});
