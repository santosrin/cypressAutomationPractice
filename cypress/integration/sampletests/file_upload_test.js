describe('file upload use cases',() => {

    it('simple file upload', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        
        const yourFixturePath = 'image1.png';
        cy.get('#fileUpload').attachFile(yourFixturePath);
    })

    it('drag and drop file upload', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')      
        const yourFixturePath = 'image1.png';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text','Done!')
    })


    it('drag and drop file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')      
        const yourFixturePath = 'image1.png';
        const yourFixturePath1 = 'image2.jpeg';

        cy.get('#filesToUpload').
        attachFile(yourFixturePath).
        attachFile(yourFixturePath1);

        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it('change file name while uploading', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')      
        const yourFixturePath = 'image1.png';
        
        // cy.get('#filesToUpload').attachFile(yourFixturePath1);
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' });
        
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

})