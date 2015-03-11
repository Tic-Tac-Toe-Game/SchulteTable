local projectName = "Schulte Table `LÖVE`" 

function love.load()
	love.graphics.setBackgroundColor(0, 100, 0)	
end

function love.draw()
	love.graphics.print(projectName, 300, 240)
end
