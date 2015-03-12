local projectName = "Schulte Table `LÖVE`" 

function love.load()
	greenColor = 1;
    size = 5;
    table = {
        distance = 50,
        width = 25,
        height = 25
    }
end

function love.update()
    greenColor = math.max((greenColor + 0.5) % 128, 32);
    love.graphics.setBackgroundColor(0, greenColor, 0)
end

function love.draw()
    love.graphics.setColor(0, 100, 100);
    for x = 1, size do
        for y = 1, size do
            love.graphics.rectangle('fill', x * table.distance, y * table.distance, table.width, table.height);
        end
    end
	love.graphics.print(projectName, 300, 240)
end