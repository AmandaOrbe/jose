module Spree
    ProductsController.class_eval do
    def index
      @searcher = build_searcher(params.merge(include_images: true))
      if @searcher.keywords
        @all_products = Spree::Product.all
        @products = []
        @best_match= []
        @all_products.each do |product|
          if product.name.downcase.include? @searcher.keywords
            @best_match << product
          end
           @all_products.reject{|product|}
        end

        unless @best_match.first
          @all_products.each do |product|
            @searcher.keywords.split.each do |word|
              if product.name.downcase.include? word.downcase
                @products <<  product
              elsif  product.description.downcase.include? word.downcase
                @products <<  product
              end
            end
          end
        end
      else
        @products = Spree::Product.all
      end
      @taxonomies = Spree::Taxonomy.includes(root: :children)
    end

  end
end

