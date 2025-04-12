function toggleSidebar() {
    const toc = document.getElementById("toc");
    const overlay = document.getElementById("toc-overlay");

    toc.classList.toggle("show");
    overlay.classList.toggle("show");

    // 仅在小屏幕时禁止滚动
    if (window.innerWidth <= 768) {
        document.body.classList.toggle("no-scroll");
    }
}

// DOM加载后执行
document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll("h1, h2, h3");

    const tocList = document.createElement("ul");

    // 生成 TOC 结构
    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
        }

        const li = document.createElement("li");
        li.className = heading.tagName.toLowerCase();

        const a = document.createElement("a");
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;

        // 在创建 a 的时候就绑定事件
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

    // 添加占位
    const spacer = document.createElement("li");
    spacer.style.height = "50px";
    tocList.appendChild(spacer);

    // 滚动监听实现高亮
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

    // 点击遮罩层关闭目录
    const overlay = document.getElementById('toc-overlay');
    overlay.addEventListener('click', toggleSidebar);
});

//向上滑隐藏页眉，反之显示
let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // 向下滚动
      header.classList.add('hide');
    } else {
      // 向上滚动
      header.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免负值
  });