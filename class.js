const svgEquation = `
    <div class="interior"><svg aria-hidden="true" role="graphics-symbol" viewBox="0 0 32 21" class="tex" style="width: 28px; height: 28px; display: block; fill: rgba(71, 70, 68, 0.6); flex-shrink: 0; margin-right: 8px;"><g> <g id="d7fc5246-3c04-467c-8f25-6c129c5642ac" data-name="tex"> <g id="ec363c67-067d-4da0-8c27-f8d029e068bd" data-name="E"> <path id="e1948427-1829-4c96-a9f4-14a99a3d5b97" data-name="path0 fill" d="M497.33,497.82c-1.2,0-2.11-.06-3-0.06a0.5,0.5,0,0,0-.55.27c0,0.15.17,0.23,0.57,0.32a1.08,1.08,0,0,1,1.06,1.23c0,0.55,0,1,0,3.32s-0.08,4.43-.13,5.21c-0.08,1-.42,1.2-1.39,1.41a0.59,0.59,0,0,0-.53.32c0,0.21.23,0.25,0.59,0.25,0.7,0,1.08-.09,2.13-0.09,2.76,0,6,.13,6.21.13a0.7,0.7,0,0,0,.36-0.21,14.63,14.63,0,0,0,.68-2.07c0-.21,0-0.53-0.15-0.53a0.78,0.78,0,0,0-.48.55,2.41,2.41,0,0,1-1.54,1.41,9,9,0,0,1-1.8.15,10.57,10.57,0,0,1-1.69-.13,0.74,0.74,0,0,1-.38-0.44,7,7,0,0,1-.15-1.56c0-.78,0-2.49.06-2.93a0.26,0.26,0,0,1,.17-0.17c0.53,0,1.29,0,1.9,0,1.06,0.06,1.18.13,1.44,1a0.52,0.52,0,0,0,.32.4c0.15,0,.23-0.19.23-0.53s-0.06-.68-0.06-1.2,0-.84.06-1.35c0-.17,0-0.46-0.17-0.46a0.54,0.54,0,0,0-.36.42c-0.34.87-.38,0.93-2.09,0.93h-1.27a0.18,0.18,0,0,1-.17-0.17c0-.44,0-3.84.08-4.29a0.5,0.5,0,0,1,.27-0.55,21.09,21.09,0,0,1,2.7.1,1.4,1.4,0,0,1,1.25,1.31,0.54,0.54,0,0,0,.3.47,0.46,0.46,0,0,0,.3-0.51c0-.38,0-1.08,0-1.84a0.28,0.28,0,0,0-.17-0.23,14.12,14.12,0,0,1-1.75.08h-2.81Z" transform="translate(-484.44 -490.06)"></path> </g> <g id="8dfbf0a9-85f0-49da-99d8-6229354b9534" data-name="T"> <path id="8602b8e9-f5d6-42d3-88c6-0649b350ce04" data-name="path1 fill" d="M490.48,490.82c-2.18,0-3.91-.06-4.39-0.11a1.32,1.32,0,0,1-.68-0.34,0.85,0.85,0,0,0-.3-0.3,0.39,0.39,0,0,0-.28.32,19.85,19.85,0,0,1-.38,2.55,0.4,0.4,0,0,0,.23.42c0.08,0,.19,0,0.38-0.42a5.64,5.64,0,0,1,.61-1,1.72,1.72,0,0,1,1.35-.44c0.32,0,1.94,0,2.3.09a0.26,0.26,0,0,1,.17.25v2.26c0,1.46-.09,5.3-0.13,6.44-0.06,1.41-.11,1.71-1.41,2a0.47,0.47,0,0,0-.38.34c0,0.11.19,0.23,0.57,0.23s1.33-.13,2.22-0.13,2.13,0.1,2.28.1,0.53,0,.53-0.25a0.65,0.65,0,0,0-.49-0.34c-1.22-.25-1.31-0.53-1.39-1.33s-0.1-2.6-.1-4.81c0-1.63,0-3.61,0-4.5a0.35,0.35,0,0,1,.15-0.25c0.29-.06,2.26-0.06,2.6,0,1.12,0.06,1.37.15,1.5,1.16,0.06,0.48.15,0.61,0.28,0.61a0.43,0.43,0,0,0,.32-0.38,11.69,11.69,0,0,1,.42-2.2c0.1-.27,0-0.44-0.09-0.44a0.72,0.72,0,0,0-.28.13,2.49,2.49,0,0,1-1.33.32C494,490.8,491.49,490.82,490.48,490.82Z" transform="translate(-484.44 -490.06)"></path> </g> <g id="88168da7-a35d-4a6e-af2a-2bab78b9d062" data-name="X"> <path id="f33958e3-fb20-476c-b2a8-674ffe821a96" data-name="path2 fill" d="M504,491a0.52,0.52,0,0,0,.51.36,3,3,0,0,1,1.84,1.14,53.54,53.54,0,0,1,3,4.73,0.22,0.22,0,0,1-.06.27c-1.14,1.58-2.22,2.87-3,3.72a4.47,4.47,0,0,1-2.22,1.27c-0.51.1-.7,0.27-0.7,0.44s0.15,0.21.51,0.21,1.2-.1,2-0.1c0.61,0,1.48.06,2,.06,0.25,0,.46-0.08.46-0.27a0.53,0.53,0,0,0-.46-0.32c-0.74-.27-1-0.47-0.17-1.82,0.53-.78,1.44-2,2.05-2.72a0.15,0.15,0,0,1,.19,0c0.23,0.21,2.09,3.17,2.53,4a0.26,0.26,0,0,1-.08.34,3.18,3.18,0,0,1-.68.23c-0.32.11-.42,0.19-0.42,0.34s0.11,0.25.47,0.25,1-.08,1.58-0.08c1.12,0,2.17.11,2.79,0.11,0.42,0,.57-0.09.57-0.25a0.49,0.49,0,0,0-.44-0.36,3.37,3.37,0,0,1-2.34-1.73c-0.49-.67-2.7-4-2.83-4.31a0.45,0.45,0,0,1,0-.23c0.91-1.27,2.17-2.7,2.85-3.52a3.79,3.79,0,0,1,2.38-1.41,0.5,0.5,0,0,0,.44-0.34,0.44,0.44,0,0,0-.46-0.21c-0.44,0-1.56.06-2,.06s-1.12,0-1.69,0c-0.36,0-.53.1-0.53,0.25a0.49,0.49,0,0,0,.48.34c0.67,0.13,1,.34.72,0.89a32.86,32.86,0,0,1-2.53,3.44,0.14,0.14,0,0,1-.19,0,33.44,33.44,0,0,1-2.3-3.63c-0.21-.38,0-0.59.34-0.68s0.46-.21.46-0.36a0.43,0.43,0,0,0-.47-0.21c-0.55,0-.91,0-1.63,0s-2-.1-2.39-0.1S504,490.84,504,491Z" transform="translate(-484.44 -490.06)"></path> </g> </g> </g></svg><div class="eqText">Add a TeX equation</div></div>
    <div role="button" class="del-icon" tabindex="0" aria-expanded="false" aria-haspopup="dialog" style="user-select: none; transition: opacity 200ms ease-in; cursor: pointer; opacity: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 26px; height: 26px; fill: rgba(71, 70, 68, 0.6); position: absolute; top: 4px; right: 4px; color: rgb(115, 114, 110); border-radius: 4px;"><svg aria-hidden="true" viewBox="0 0 16 16" class="ellipsisSmall" style="width: 16px; height: 16px; display: block; fill: inherit; flex-shrink: 0;"><path d="M3.2 6.725a1.275 1.275 0 1 0 0 2.55 1.275 1.275 0 0 0 0-2.55m4.8 0a1.275 1.275 0 1 0 0 2.55 1.275 1.275 0 0 0 0-2.55m4.8 0a1.275 1.275 0 1 0 0 2.55 1.275 1.275 0 0 0 0-2.55"></path></svg></div>
    `;
const svgCopyIcon = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M12.668 10.667C12.668 9.95614 12.668 9.46258 12.6367 9.0791C12.6137 8.79732 12.5758 8.60761 12.5244 8.46387L12.4688 8.33399C12.3148 8.03193 12.0803 7.77885 11.793 7.60254L11.666 7.53125C11.508 7.45087 11.2963 7.39395 10.9209 7.36328C10.5374 7.33197 10.0439 7.33203 9.33301 7.33203H6.5C5.78896 7.33203 5.29563 7.33195 4.91211 7.36328C4.63016 7.38632 4.44065 7.42413 4.29688 7.47559L4.16699 7.53125C3.86488 7.68518 3.61186 7.9196 3.43555 8.20703L3.36524 8.33399C3.28478 8.49198 3.22795 8.70352 3.19727 9.0791C3.16595 9.46259 3.16504 9.95611 3.16504 10.667V13.5C3.16504 14.211 3.16593 14.7044 3.19727 15.0879C3.22797 15.4636 3.28473 15.675 3.36524 15.833L3.43555 15.959C3.61186 16.2466 3.86474 16.4807 4.16699 16.6348L4.29688 16.6914C4.44063 16.7428 4.63025 16.7797 4.91211 16.8027C5.29563 16.8341 5.78896 16.835 6.5 16.835H9.33301C10.0439 16.835 10.5374 16.8341 10.9209 16.8027C11.2965 16.772 11.508 16.7152 11.666 16.6348L11.793 16.5645C12.0804 16.3881 12.3148 16.1351 12.4688 15.833L12.5244 15.7031C12.5759 15.5594 12.6137 15.3698 12.6367 15.0879C12.6681 14.7044 12.668 14.211 12.668 13.5V10.667ZM13.998 12.665C14.4528 12.6634 14.8011 12.6602 15.0879 12.6367C15.4635 12.606 15.675 12.5492 15.833 12.4688L15.959 12.3975C16.2466 12.2211 16.4808 11.9682 16.6348 11.666L16.6914 11.5361C16.7428 11.3924 16.7797 11.2026 16.8027 10.9209C16.8341 10.5374 16.835 10.0439 16.835 9.33301V6.5C16.835 5.78896 16.8341 5.29563 16.8027 4.91211C16.7797 4.63025 16.7428 4.44063 16.6914 4.29688L16.6348 4.16699C16.4807 3.86474 16.2466 3.61186 15.959 3.43555L15.833 3.36524C15.675 3.28473 15.4636 3.22797 15.0879 3.19727C14.7044 3.16593 14.211 3.16504 13.5 3.16504H10.667C9.9561 3.16504 9.46259 3.16595 9.0791 3.19727C8.79739 3.22028 8.6076 3.2572 8.46387 3.30859L8.33399 3.36524C8.03176 3.51923 7.77886 3.75343 7.60254 4.04102L7.53125 4.16699C7.4508 4.32498 7.39397 4.53655 7.36328 4.91211C7.33985 5.19893 7.33562 5.54719 7.33399 6.00195H9.33301C10.022 6.00195 10.5791 6.00131 11.0293 6.03809C11.4873 6.07551 11.8937 6.15471 12.2705 6.34668L12.4883 6.46875C12.984 6.7728 13.3878 7.20854 13.6533 7.72949L13.7197 7.87207C13.8642 8.20859 13.9292 8.56974 13.9619 8.9707C13.9987 9.42092 13.998 9.97799 13.998 10.667V12.665ZM18.165 9.33301C18.165 10.022 18.1657 10.5791 18.1289 11.0293C18.0961 11.4302 18.0311 11.7914 17.8867 12.1279L17.8203 12.2705C17.5549 12.7914 17.1509 13.2272 16.6553 13.5313L16.4365 13.6533C16.0599 13.8452 15.6541 13.9245 15.1963 13.9619C14.8593 13.9895 14.4624 13.9935 13.9951 13.9951C13.9935 14.4624 13.9895 14.8593 13.9619 15.1963C13.9292 15.597 13.864 15.9576 13.7197 16.2939L13.6533 16.4365C13.3878 16.9576 12.9841 17.3941 12.4883 17.6982L12.2705 17.8203C11.8937 18.0123 11.4873 18.0915 11.0293 18.1289C10.5791 18.1657 10.022 18.165 9.33301 18.165H6.5C5.81091 18.165 5.25395 18.1657 4.80371 18.1289C4.40306 18.0962 4.04235 18.031 3.70606 17.8867L3.56348 17.8203C3.04244 17.5548 2.60585 17.151 2.30176 16.6553L2.17969 16.4365C1.98788 16.0599 1.90851 15.6541 1.87109 15.1963C1.83431 14.746 1.83496 14.1891 1.83496 13.5V10.667C1.83496 9.978 1.83432 9.42091 1.87109 8.9707C1.90851 8.5127 1.98772 8.10625 2.17969 7.72949L2.30176 7.51172C2.60586 7.0159 3.04236 6.6122 3.56348 6.34668L3.70606 6.28027C4.04237 6.136 4.40303 6.07083 4.80371 6.03809C5.14051 6.01057 5.53708 6.00551 6.00391 6.00391C6.00551 5.53708 6.01057 5.14051 6.03809 4.80371C6.0755 4.34588 6.15483 3.94012 6.34668 3.56348L6.46875 3.34473C6.77282 2.84912 7.20856 2.44514 7.72949 2.17969L7.87207 2.11328C8.20855 1.96886 8.56979 1.90385 8.9707 1.87109C9.42091 1.83432 9.978 1.83496 10.667 1.83496H13.5C14.1891 1.83496 14.746 1.83431 15.1963 1.87109C15.6541 1.90851 16.0599 1.98788 16.4365 2.17969L16.6553 2.30176C17.151 2.60585 17.5548 3.04244 17.8203 3.56348L17.8867 3.70606C18.031 4.04235 18.0962 4.40306 18.1289 4.80371C18.1657 5.25395 18.165 5.81091 18.165 6.5V9.33301Z"></path></svg>
    `;

const BlockEq = `<div style="display: flex; min-height: 72px; width: 100%;"><div spellcheck="false" style='flex:1; padding:4px; color: #ccc;font-size: 14px;' contenteditable="true" class="latbox"></div><div role="button" class="Save" tabindex="0" contenteditable="false" style="user-select: none; transition: background 0.1s ease-in-out; cursor: pointer; display: inline-flex; align-items: center; height: 28px; padding-inline: 8px; border-radius: 6px; white-space: nowrap; font-size: 14px; justify-content: center; flex-shrink: 0; background: rgb(35, 131, 226); color: rgb(255, 255, 255); fill: rgb(255, 255, 255); line-height: 1.2; font-weight: 500; align-self: flex-start;">Done<svg aria-hidden="true" role="graphics-symbol" viewBox="0 0 16 16" class="enter" style="width: 14px; height: 14px; display: block; fill: currentcolor; flex-shrink: 0; margin-inline-start: 6px; margin-top: 2px;"><path d="M5.38965 14.1667C5.81812 14.1667 6.10156 13.8767 6.10156 13.468C6.10156 13.2571 6.01587 13.0989 5.89062 12.967L4.18994 11.3125L3.02979 10.3369L4.55908 10.4028H12.7922C14.4402 10.4028 15.1389 9.65796 15.1389 8.04297V4.13403C15.1389 2.48608 14.4402 1.78735 12.7922 1.78735H9.13379C8.70532 1.78735 8.4021 2.11035 8.4021 2.50586C8.4021 2.90137 8.69873 3.22437 9.13379 3.22437H12.7593C13.4316 3.22437 13.7151 3.50781 13.7151 4.17358V7.99683C13.7151 8.67578 13.425 8.95923 12.7593 8.95923H4.55908L3.02979 9.03174L4.18994 8.04956L5.89062 6.39502C6.01587 6.26978 6.10156 6.11157 6.10156 5.89404C6.10156 5.48535 5.81812 5.19531 5.38965 5.19531C5.21167 5.19531 5.01392 5.27441 4.8689 5.41943L1.08521 9.1438C0.933594 9.28882 0.854492 9.48657 0.854492 9.68433C0.854492 9.87549 0.933594 10.0732 1.08521 10.2183L4.8689 13.9492C5.01392 14.0876 5.21167 14.1667 5.38965 14.1667Z"></path></svg></div></div></div>`;

class BlockEditor {
  constructor() {
    this.lastArrowKey = null;
    this.lastArrowTime = 0;
    this.blockContents = {};
    this.currentBlock = null;
    this.numBlock = 1;
    this.block = document.querySelector(".wrapper");
    this.saveTimeout = null;
    this.menu = document.getElementById("menu");
    this.init();
  }

  init() {
    this.block.addEventListener("keydown", this.attachKeyHandler);
    this.block.addEventListener("mouseenter", this.blockHover);
    this.block.addEventListener("mouseleave", this.blockUnhover);
    this.block.querySelector(".copy-icon").addEventListener("click", this.copy);
    this.blockContents["block-1"] = {
      mode: "text",
      content: "",
    };

    document.addEventListener("click", (e) => {
      const menu = document.getElementById("menu");
      if (menu && !e.target.closest(".equation") && !menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  }

  attachKeyHandler = (e) => {
    const wrapper = e.target.closest(".wrapper");
    const now = Date.now();

    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      const newWrapper = this.createWrapper();
      console.log("huiyo... class.js jalan ek");
      wrapper.insertAdjacentElement("afterend", newWrapper);
      newWrapper.querySelector(".block").focus();
    } else if (e.key === "ArrowUp") {
      if (lastArrowKey === "ArrowUp" && now - lastArrowTime < 300) {
        const prevWrapper = wrapper.previousElementSibling;
        if (prevWrapper && prevWrapper.classList.contains("wrapper")) {
          prevWrapper.querySelector(".block").focus();
          document.execCommand("selectAll", false, null);
          document.getSelection().collapseToEnd();
        }
      }
      lastArrowKey = "ArrowUp";
      lastArrowTime = now;
    } else if (e.key === "ArrowDown") {
      if (this.lastArrowKey === "ArrowDown" && now - lastArrowTime < 500) {
        const nextWrapper = wrapper.nextElementSibling;
        if (nextWrapper && nextWrapper.classList.contains("wrapper")) {
          nextWrapper.querySelector(".block").focus();
          document.execCommand("selectAll", false, null);
          document.getSelection().collapseToEnd();
        }
      }
      lastArrowKey = "ArrowDown";
      lastArrowTime = now;
    } else if (e.key === "Enter") {
      const text = e.target.closest(".block")?.textContent.trim() ?? "";
      if (text === "") {
        e.preventDefault();
        return;
      }
    } else if (
      e.key === "Backspace" ||
      (e.key === "Delete" && e.target.textContent.trim() === "")
    ) {
      const wrappers = document.querySelectorAll(".wrapper");
      e.preventDefault()
      e.stopPropagation();
      if (e.target.innerHTML === "<br>") {
        e.target.innerHTML = "";
        return;
      }

      if (wrappers.length > 1) {
        e.preventDefault();
        const prevWrapper = wrapper.previousElementSibling;
        const nextWrapper = wrapper.nextElementSibling;
        wrapper.parentElement.removeChild(wrapper);
        if (prevWrapper && prevWrapper.classList.contains("wrapper")) {
          prevWrapper.querySelector(".block").focus();
        } else if (nextWrapper && nextWrapper.classList.contains("wrapper")) {
          nextWrapper.querySelector(".block").focus();
        }
      }
      return;
    } else if (e.key === "/") {
      const blockId = e.target.closest(".wrapper").dataset.id;
      this.openMenu(e, blockId);
    }
  };

  createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.addEventListener("mouseenter", this.blockHover);
    wrapper.addEventListener("mouseleave", this.blockUnhover);
    this.numBlock++;
    const blockId = `block-${this.numBlock}`;
    wrapper.setAttribute("data-id", blockId);

    this.blockContents[blockId] = {
      mode: "text",
      content: "",
    };

    const block = document.createElement("div");
    block.className = "block";
    block.contentEditable = "true";
    block.addEventListener("keydown", this.attachKeyHandler);

    const svg = document.createElement("div");
    svg.className = "copy-icon";
    svg.innerHTML = svgCopyIcon;
    svg.addEventListener("click", this.copy);

    wrapper.appendChild(svg);
    wrapper.appendChild(block);

    return wrapper;
  }

  openMenu(e, blockId) {
    const rect = e.currentTarget.getBoundingClientRect();
    this.menu.innerHTML = `<div role="button" id="change" contenteditable="false" style="  user-select:none; padding: 6px 12px; background-color: #007bff; color: white; border: none;border-radius: 4px; cursor: pointer; font-size: 14px;">Equation Block</div>`;
    this.menu.style.left = `${rect.left}px`;
    this.menu.style.top = `${rect.bottom}px`;
    this.menu.style.width = `${rect.width - 8}px`;
    this.menu.style.display = "block";
    const change = document.querySelector("#change");
    change.addEventListener("click", (e) => {
      this.menu.style.display = "none"; // 🔴 hide menu first
      this.EquationBlock(e, blockId); // 🧠 then run your logic
    });
  }

  blockHover(e) {
    const svg = e.target.querySelector(".copy-icon svg");
    const del = e.target.querySelector(".del-icon");
    if (svg) {
      svg.style.opacity = "1";
      svg.style.transition = "opacity 0.3s";
    }
    if (del) {
      del.style.opacity = "1";
      del.style.transition = "opacity 0.3s";
    }
  }
  blockUnhover(e) {
    const svg = e.target.querySelector(".copy-icon svg");
    const del = e.target.querySelector(".del-icon");
    if (svg) {
      svg.style.opacity = "0";
      svg.style.transition = "opacity 0.3s";
    }
    if (del) {
      del.style.opacity = "0";
      del.style.transition = "opacity 0.3s";
    }
  }

  copy(e) {
    const block = e.target.parentElement.querySelector(".block");
    const parent = e.target.parentElement;

    parent.style.transition = "transform 0.1s";
    parent.style.transform = "scale(0.95)";
    setTimeout(() => {
      parent.style.transform = "scale(1)";
    }, 100);

    if (block) {
      const text = block.textContent.trim();
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const shortText = text.length > 15 ? text.slice(0, 15) + "..." : text;
          console.log("Copied to clipboard:", shortText);
        });
      } else {
        console.log("No text to copy");
      }
    }
  }

  EquationBlock(e, blockId) {
    e.preventDefault();
    const wrapper = document.querySelector(`[data-id="${blockId}"]`);
    const block = wrapper.querySelector(".block");
    const equation = document.createElement("div");
    equation.className = "equation";
    equation.setAttribute("role", "button");
    equation.setAttribute("contenteditable", "false");
    equation.innerHTML = svgEquation;
    block.replaceWith(equation);
    this.menu.innerHTML = BlockEq;

    equation.addEventListener("click", (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const eqText = e.currentTarget
        .querySelector(".interior")
        .getBoundingClientRect();

      
      this.menu.style.left = `${rect.left + window.scrollX}px`;
      this.menu.style.top = `${rect.bottom + window.scrollY}px`;
      this.menu.style.width = `${eqText.width}px`;
      this.menu.style.display = "block";

      this.currentBlock = e.target.closest(".wrapper");
      this.menu.querySelector(".latbox").innerHTML = this.blockContents[blockId]
        .content
        ? this.blockContents[blockId].content
        : `<pre style="font-family: monospace; margin: 0; user-select:none;">|x| = \\begin{bmatrix}
        a & b \\\\
        c & d
      \\end{bmatrix}</pre>`;
    });

    this.menu.addEventListener("focus", (e) => {
      const range = document.createRange();
      const sel = window.getSelection();
      const box = e.target.querySelector(".latbox");

      if (box.querySelector("pre")) {
        box.innerHTML = "";
        box.style.color = "black";

        range.setStart(box, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (box.innerHTML === `<br>`) {
        box.style.color = "#ccc";
        box.innerHTML = `<pre style="font-family: monospace; margin: 0; user-select:none;">|x| = \\begin{bmatrix}
        a & b \\\\
        c & d
      \\end{bmatrix}</pre>`;
      }
    });

    this.menu.addEventListener("focusin", () => {
      const id = this.currentBlock?.dataset?.id;
      const renderArea = this.currentBlock?.querySelector(".interior");
      this.previousLatex = renderArea?.innerHTML ?? "";
    });

    this.menu.addEventListener("input", () => {
      const id = this.currentBlock?.dataset?.id;
      const latex = this.menu.querySelector(".latbox").innerText.trim();
      const renderArea = this.currentBlock.querySelector(".interior");

      renderArea.style.userSelect = "none";
      renderArea.style.fontSize = "18px";
      renderArea.style.textAlign = "center";

      if (latex === "") {
        renderArea.removeAttribute("style");
        renderArea.innerHTML = this.previousLatex;
      } else {
        this.renderMath(latex, renderArea);
      }

    
    });

    document
      .querySelector(".Save")
      .addEventListener("click", () => this.saveContent(blockId));

    equation.querySelector(".del-icon").addEventListener("click", (e) => {
      this.deleteEqBlock(e);
      this.menu.style.display = "none";
    });
  }

  saveContent(blockId) {
  const latex = this.menu.querySelector(".latbox").innerText.trim();

  // If nothing typed, don't save
  if (!latex) return;

  // If already saved and nothing has changed, skip
  if (
    this.blockContents[blockId] &&
    this.blockContents[blockId].content === latex
  ) {
    return;
  }

  // Otherwise, save the new content
  this.blockContents[blockId] = {
    mode: "equation",
    content: latex
  };

  this.menu.style.display = "none";
  console.log(this.blockContents);
}

  deleteEqBlock(e) {
    e.stopPropagation();
    const wrapper = e.currentTarget.closest(".equation");
    const block = document.createElement("div");
    block.className = "block";
    block.contentEditable = "true";
    block.addEventListener("keydown", this.attachKeyHandler);
    wrapper.replaceWith(block);
    block.focus();
    return;
  }

  renderMath(content, target) {
    katex.render(content, target, {
      throwOnError: true,
    });
  }
}

new BlockEditor();
