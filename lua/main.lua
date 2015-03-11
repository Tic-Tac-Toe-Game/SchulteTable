local projectName = "Schulte Table `LÖVE`" 

function love.load()
	greenColor = 1;
end

function love.update()
    greenColor = math.max((greenColor + 0.5) % 128, 32);
    love.graphics.setBackgroundColor(0, greenColor, 0)
end

function love.draw()
	love.graphics.print(projectName, 300, 240)
end