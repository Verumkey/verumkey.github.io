function toggleSidebar() {
    const toc = document.getElementById("toc");
    const overlay = document.getElementById("toc-overlay");

    toc.classList.toggle("show");
    overlay.classList.toggle("show");

    // ����С��Ļʱ��ֹ����
    if (window.innerWidth <= 768) {
        document.body.classList.toggle("no-scroll");
    }
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

        // �ڴ��� a ��ʱ��Ͱ��¼�
        a.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                toc.classList.remove("show");
                overlay.classList.remove("show");
                document.body.classList.remove("no-scroll");
            }
        });

        li.appendChild(a);
        tocList.appendChild(li);
    });

    toc.appendChild(tocList);

    // ���ռλ
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

//���ϻ�����ҳü����֮��ʾ
let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // ���¹���
      header.classList.add('hide');
    } else {
      // ���Ϲ���
      header.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // ���⸺ֵ
  });