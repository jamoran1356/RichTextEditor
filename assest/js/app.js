window.onload = function() {

    const editorDiv = document.getElementById("editor");

    if(editorDiv){
        //contenedor
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("contenedor_box");
        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");
        containerDiv.appendChild(optionsDiv);
        
        // Text format
        const boldBtn = document.createElement("button");
        boldBtn.setAttribute("id", "bold");
        boldBtn.classList.add("option-btn", "format");
        const boldIcon = document.createElement("i");
        boldIcon.classList.add("fa-solid", "fa-bold");
        boldBtn.appendChild(boldIcon);
        optionsDiv.appendChild(boldBtn);

        const italicBtn = document.createElement("button");
        italicBtn.setAttribute("id", "italic");
        italicBtn.classList.add("option-btn", "format");
        const italicIcon = document.createElement("i");
        italicIcon.classList.add("fa-solid", "fa-italic");
        italicBtn.appendChild(italicIcon);
        optionsDiv.appendChild(italicBtn);

        const underlineBtn = document.createElement("button");
        underlineBtn.setAttribute("id", "underline");
        underlineBtn.classList.add("option-btn", "format");
        const underlineIcon = document.createElement("i");
        underlineIcon.classList.add("fa-solid", "fa-underline");
        underlineBtn.appendChild(underlineIcon);
        optionsDiv.appendChild(underlineBtn);

        const superscriptBtn = document.createElement("button");
        superscriptBtn.setAttribute("id", "superscript");
        superscriptBtn.classList.add("option-btn", "format");
        const superscriptIcon = document.createElement("i");
        superscriptIcon.classList.add("fa-solid", "fa-superscript");
        superscriptBtn.appendChild(superscriptIcon);
        optionsDiv.appendChild(superscriptBtn);

        const subscriptBtn = document.createElement("button");
        subscriptBtn.setAttribute("id", "subscript");
        subscriptBtn.classList.add("option-btn", "format");
        const subscriptIcon = document.createElement("i");
        subscriptIcon.classList.add("fa-solid", "fa-subscript");
        subscriptBtn.appendChild(subscriptIcon);
        optionsDiv.appendChild(subscriptBtn);

        // Add alignment buttons to optionsDiv
        const justifyLeftBtn = document.createElement("button");
        justifyLeftBtn.id = "justifyLeft";
        justifyLeftBtn.classList.add("option-btn", "align");
        justifyLeftBtn.innerHTML = '<i class="fa-solid fa-align-left"></i>';
        optionsDiv.appendChild(justifyLeftBtn);

        const justifyCenterBtn = document.createElement("button");
        justifyCenterBtn.id = "justifyCenter";
        justifyCenterBtn.classList.add("option-btn", "align");
        justifyCenterBtn.innerHTML = '<i class="fa-solid fa-align-center"></i>';
        optionsDiv.appendChild(justifyCenterBtn);

        const justifyRightBtn = document.createElement("button");
        justifyRightBtn.id = "justifyRight";
        justifyRightBtn.classList.add("option-btn", "align");
        justifyRightBtn.innerHTML = '<i class="fa-solid fa-align-right"></i>';
        optionsDiv.appendChild(justifyRightBtn);

        const justifyFullBtn = document.createElement("button");
        justifyFullBtn.id = "justifyFull";
        justifyFullBtn.classList.add("option-btn", "align");
        justifyFullBtn.innerHTML = '<i class="fa-solid fa-align-justify"></i>';
        optionsDiv.appendChild(justifyFullBtn);

        // List
        const insertOrderedListBtn = document.createElement("button");
        insertOrderedListBtn.setAttribute("id", "insertOrderedList");
        insertOrderedListBtn.classList.add("option-btn");
        const insertOrderedListIcon = document.createElement("div");
        insertOrderedListIcon.classList.add("fa-solid", "fa-list-ol");
        insertOrderedListBtn.appendChild(insertOrderedListIcon);
        optionsDiv.appendChild(insertOrderedListBtn);

        const insertUnOrderedListBtn = document.createElement("button");
        insertUnOrderedListBtn.setAttribute("id", "insertUnOrderedList");
        insertUnOrderedListBtn.classList.add("option-btn");
        const insertUnOrderedListIcon = document.createElement("div");
        insertUnOrderedListIcon.classList.add("fa-solid", "fa-list");
        insertUnOrderedListBtn.appendChild(insertUnOrderedListIcon);
        optionsDiv.appendChild(insertUnOrderedListBtn);

        // Undo/Redo
        const undoBtn = document.createElement("button");
        undoBtn.setAttribute("id", "undo");
        undoBtn.classList.add("option-btn");
        const undoIcon = document.createElement("i");
        undoIcon.classList.add("fa-solid", "fa-rotate-left");
        undoBtn.appendChild(undoIcon);
        optionsDiv.appendChild(undoBtn);

        const redoBtn = document.createElement("button");
        redoBtn.setAttribute("id", "redo");
        redoBtn.classList.add("option-btn");
        const redoIcon = document.createElement("i");
        redoIcon.classList.add("fa-solid", "fa-rotate-right");
        redoBtn.appendChild(redoIcon);
        optionsDiv.appendChild(redoBtn);

        // Link
        const createLinkBtn = document.createElement("button");
        createLinkBtn.setAttribute("id", "createLink");
        createLinkBtn.classList.add("option-btn");
        const createLinkIcon = document.createElement("i");
        createLinkIcon.classList.add("fa-solid", "fa-link");
        createLinkBtn.appendChild(createLinkIcon);
        optionsDiv.appendChild(createLinkBtn);

        const unLinkBtn = document.createElement("button");
        unLinkBtn.setAttribute("id", "unLink");
        unLinkBtn.classList.add("option-btn");
        const unLinkIcon = document.createElement("i");
        unLinkIcon.classList.add("fa-solid", "fa-unlink");
        unLinkBtn.appendChild(unLinkIcon);
        optionsDiv.appendChild(unLinkBtn);


        // Add image button to optionsDiv
        const insertImgBtn = document.createElement("button");
        insertImgBtn.id = "insertImg";
        insertImgBtn.classList.add("option-btn");
        insertImgBtn.innerHTML = '<i class="fa-regular fa-image"></i>';
        optionsDiv.appendChild(insertImgBtn);

        

        // Add spacing buttons to optionsDiv
        const indentBtn = document.createElement("button");
        indentBtn.id = "indent";
        indentBtn.classList.add("option-btn", "spacing");
        indentBtn.innerHTML = '<i class="fa-solid fa-indent"></i>';
        optionsDiv.appendChild(indentBtn);

        const outdentBtn = document.createElement("button");
        outdentBtn.id = "outdent";
        outdentBtn.classList.add("option-btn", "spacing");
        outdentBtn.innerHTML = '<i class="fa-solid fa-outdent"></i>';
        optionsDiv.appendChild(outdentBtn);

        // Add headings dropdown to optionsDiv
        const formatBlockSelect = document.createElement("select");
        formatBlockSelect.id = "formatBlock";
        formatBlockSelect.classList.add("adv-option-button");
        const headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
        for (let i = 0; i < headings.length; i++) {
        const option = document.createElement("option");
        option.value = headings[i];
        option.text = headings[i];
        formatBlockSelect.appendChild(option);
        }
        optionsDiv.appendChild(formatBlockSelect);

        // Add font family dropdown to optionsDiv
        const fontNameSelect = document.createElement("select");
        fontNameSelect.id = "fontName";
        fontNameSelect.classList.add("adv-option-button");
        const fonts = ["Arial","Verdana","Times New Roman","Garamond","Georgia","Courier New","Tahoma"]
        for(let j = 0 ; j < fonts.length; j++){
            const optionf = document.createElement("option");
            optionf.value = fonts[j];
            optionf.text = fonts[j];
            fontNameSelect.appendChild(optionf);
        }
        optionsDiv.appendChild(fontNameSelect);
        
        // Add font size dropdown to optionsDiv
        const fontSizeSelect = document.createElement("select");
        fontSizeSelect.id = "fontSize";
        fontSizeSelect.classList.add("adv-option-button");
        for (let f = 3; f < 12; f++){
            const optionh = document.createElement("option");
            optionh.value = f;
            optionh.text = f;
            fontSizeSelect.appendChild(optionh);
        }
        optionsDiv.appendChild(fontSizeSelect);
        
        // Add font color input to optionsDiv
        const foreColorInput = document.createElement("input");
        foreColorInput.type = "color";
        foreColorInput.id = "foreColor";
        foreColorInput.classList.add("adv-option-button");
        const foreColorLabel = document.createElement("label");
        foreColorLabel.htmlFor = "foreColor";
        foreColorLabel.textContent = "Color";
        const foreColorWrapper = document.createElement("div");
        foreColorWrapper.classList.add("input-wrapper");
        foreColorWrapper.appendChild(foreColorLabel);
        foreColorWrapper.appendChild(foreColorInput);
        optionsDiv.appendChild(foreColorWrapper);
        
        // Add background color input to optionsDiv
        const backColorInput = document.createElement("input");
        backColorInput.type = "color";
        backColorInput.id = "backColor";
        backColorInput.classList.add("adv-option-button");
        const backColorLabel = document.createElement("label");
        backColorLabel.setAttribute("for", "backColor");
        backColorLabel.textContent = "Bg";

        const backColorWrapper = document.createElement("div");
        backColorWrapper.classList.add("input-wrapper");
        backColorWrapper.appendChild(backColorLabel);
        backColorWrapper.appendChild(backColorInput);

        optionsDiv.appendChild(backColorWrapper);
        

        const editable = document.createElement('div');
        editable.setAttribute('id', 'contenido');
        editable.setAttribute('contenteditable', 'true');
        containerDiv.appendChild(editable);
        
        editorDiv.appendChild(containerDiv);

        let optionsButtons = document.querySelectorAll(".option-btn");
        let advancedOptionButtom = document.querySelectorAll(".adv-option-button");
        let fontName = document.getElementById("fontName");
        let fontSizeRef = document.getElementById("fontSize");
        let writingArea = document.getElementById("contenido");
        let linkButton = document.getElementById("createLink");
        let imgButton = document.getElementById("insertImg");
        let alignButton = document.querySelectorAll(".align");
        let spacingButton = document.querySelectorAll(".spacing");
        let formatButton = document.querySelectorAll(".format");
        let scriptButton = document.querySelectorAll(".script");

       

        


        const initializer = () => {
    
            highlighter(alignButton, true);
            highlighter(spacingButton, true);
            highlighter(formatButton, false);
            highlighter(scriptButton, true);
        } 

        const highlighter = (className, needsRemoval) => {
            className.forEach((button) => {
                button.addEventListener("click", () =>{
                    if (needsRemoval){
                        let AlreadyActive = false;
                    
        
                    if(button.classList.contains("active")){
                        AlreadyActive = true;
                    }
        
                    highlighterRemover(className);
                        if(!AlreadyActive){
                            button.classList.add("active");
                        }
                }
                else {
        
                    button.classList.toggle("active");
        
                    }
        
                });
                
            });
        };

        const highlighterRemover = (className) => {
            className.forEach((button) => {
                button.classList.remove("active");
            })
        }

        const modifyText = (command, defaultUi, value) => {
            document.execCommand(command, defaultUi, value);
        }
        
        optionsButtons.forEach((button) => {
            button.addEventListener("click", () => {
                modifyText(button.id, false, null);
            });
        });
        
        
        advancedOptionButtom.forEach((button)=>{
            button.addEventListener("change", () => {
                modifyText(button.id, false, button.value);
            });
        });


        linkButton.addEventListener("click", () =>{
            let usrLink = prompt("Ingresa una URL");
            if(/http/i.test(usrLink)){
                modifyText(linkButton.id, false, usrLink);
            } else {
                usrLink = "http://" + usrLink;
                modifyText(linkButton.id, false, usrLink);
            }
        })
        

         //funcion para agregar imagen
         const insertImage = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = () => {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    const img = new Image();
                    img.src = reader.result;
                    img.width = "300"; // Establece el ancho de la imagen
                    const div = document.createElement('div');
                    div.contentEditable = 'true';
                    div.appendChild(img);
                    document.execCommand('insertHTML', false, div.outerHTML);
                };
                
                reader.readAsDataURL(file);
            };
            input.click();
        };

        imgButton.addEventListener("click", insertImage);


        initializer();
        }

        
    }   