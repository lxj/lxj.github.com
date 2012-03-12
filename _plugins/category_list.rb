#!/usr/bin/env ruby19
module Jekyll
  class CategoryList < Liquid::Tag
    safe = true
    
    def render(context)
      result = ""
      categories = context.registers[:site].categories
      
      categories.keys.each do |category|
        result << %(<li class="t-item"><a href="/categories/#{category.slugize}">#{category}</a><span class="length">(#{categories[category].length})</span></li>)
      end
      
      result
    end
  end
end
 
Liquid::Template.register_tag('category_list', Jekyll::CategoryList)
