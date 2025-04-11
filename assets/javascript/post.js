// �л�Ŀ¼��ʾ/����
function toggleSidebar() {
    const toc = document.getElementById("toc");
    const overlay = document.getElementById("toc-overlay");
    toc.classList.toggle("show");
  
}


// DOM���غ�ִ��
document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll("h1, h2, h3");

    const tocList = document.createElement("ul");

    // ���� TOC �ṹ
    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
        }

        const li = document.createElement("li");
        li.className = heading.tagName.toLowerCase();

        const a = document.createElement("a");
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        tocList.appendChild(li);
    });

    toc.appendChild(tocList);
    /*���һ��ռλ*/
    const spacer = document.createElement("li");
    spacer.style.height = "50px";
    tocList.appendChild(spacer);
    // ��������ʵ�ָ���
    const links = toc.querySelectorAll("a");

    window.addEventListener("scroll", () => {
        let current = null;
        const scrollPosition = window.scrollY + 100;

        headings.forEach((heading, i) => {
            if (heading.offsetTop <= scrollPosition) {
                current = links[i];
            }
        });

        links.forEach(link => link.classList.remove("active"));

        if (current) {
            current.classList.add("active");
            current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    });

    // ������ֲ�ر�Ŀ¼
    const overlay = document.getElementById('toc-overlay');
    overlay.addEventListener('click', toggleSidebar);
});
