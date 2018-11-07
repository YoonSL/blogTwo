






            const render = function () {

                const display = $('<div>');
                $('body').append(display);
                display.append(
                    $('<h2>')
                        .attr('id', 'allTopText')
                        .text('The Minimalists Directory'),
                    $('<div>')
                        .addClass('center')
                        .append(
                            $('<input>')
                                .attr('id', 'lookupInput')
                                .attr('placeholder', 'Who would you like to lookup?'),
                            $('<button>')
                                .addClass('innerButtons')
                                .attr('id', 'innerLookup')
                                .append(
                                    $('<i>')
                                        .addClass('fas fa-search')
                                )
                        ),
                    $('<h1>')
                        .attr('id', 'lookupInfo')
                )
            }
            render();






    // let content = (`<h2 id = 'allTopText'>The Minimalists Directory</h2>`) + (`<div class = "center"><input id = "lookupInput" placeholder="Who would you like to lookup?"/>
        // <button class = "innerButtons" id = "innerLookup"><i class="fas fa-search"></i></button></div>`) +
        //     (`<h1 id = "lookupInfo"></h1>`);

        // display.append(content);