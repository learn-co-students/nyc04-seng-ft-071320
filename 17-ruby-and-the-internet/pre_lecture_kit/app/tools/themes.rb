module Themes

    def alert_theme(str_args_arr)
        # iterate over the array of strings and colorize each one
        str_args_arr.each do |str|
            puts str.colorize(:color => :black, :background => :yellow)
        end
    end

    def mix_theme(str_args_arr)
        # iterate over the array of strings and colorize each one
        str_args_arr.each do |str|
            # choose a front/background color from the array in colors.rb and then transform it into a symbol because ".colorize" accepts only symbols
            font_color = $font_colors.sample.to_sym
            background_color = $background_colors.sample.to_sym
            #output the string
            puts str.colorize(:color => font_color, :background => background_color) + "\n"
        end
    end

end