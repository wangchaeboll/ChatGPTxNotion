const svgCopyIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>
`;

class Start {
  constructor() {
    this.saved = null;
  }

  getGPTChats() {
    const e = document.querySelectorAll("article h6.sr-only"),
      els = document.querySelectorAll("span.katex-html");
    if (e && els) {
      els.forEach((el) => {
        this.latexBox(el);
      });
    }
  }

  latexBox(e) {
    const displayParent = e.closest(".katex-display");
    if (!displayParent || displayParent.classList.contains("has-copy-box"))
      return;

    setTimeout(() => this.addElement(displayParent), 1500);
  }

  addElement(e) {
    const boxId = "latex-copy-box";
    const existing = e.querySelector(`#${boxId}`);
    if (existing) existing.remove();

    const div = document.createElement("div");
    div.style.display = "none";
    div.id = boxId;
    div.setAttribute("role", "button");
    div.innerHTML = svgCopyIcon;

    const svg = div.querySelector("svg");
    if (svg) {
      svg.style.width = "12px";
      svg.style.height = "12px";
      svg.style.margin = "0px";
    }

    Object.assign(div.style, {
      position: "absolute",
      top: "-4px",
      left: "0.5rem",
      zIndex: "1000",
    });

    e.classList.add("has-copy-box");
    e.style.position = "relative";
    e.appendChild(div);
    this.hoverClickFunc(e, div);
  }

  hoverClickFunc(e, f) {
    e.addEventListener(
      "mouseenter",
      () => {
        f.style.display = "block";
      },
      !0
    );

    e.addEventListener("mouseleave", () => {
      f.style.display = "none";
    });

    f.addEventListener(
      "click",
      () => {
        this.animate(e)
        const latex = e.querySelector("annotation")?.textContent;
        if (latex) {
          navigator.clipboard.writeText(latex);
          this.saved = latex
          console.log("Copied:", latex);
        }
      },
      !0
    );
  }

  animate(e){
    e.style.transition = "transform 0.1s";
    e.style.transform = "scale(0.95)";
    setTimeout(() => {
    e.style.transform = "scale(1)";
    }, 100);
  }
}

const start = new Start();

// initialization
new MutationObserver((e, t) => {
  const n = window.location.href.startsWith("https://chatgpt.com/c/"),
    m = document.querySelector("#page-header");
  n && m && start.getGPTChats();
}).observe(document, {
  childList: !0,
  subtree: !0,
});

console.log("binding");
