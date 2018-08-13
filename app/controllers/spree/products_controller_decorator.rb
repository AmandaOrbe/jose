module Spree
    ProductsController.class_eval do
    def index
      @searcher = build_searcher(params.merge(include_images: true))
      if @searcher.keywords
        @products = []
        Spree::Product.all.each do |product|
          @searcher.keywords.split.each do |word|
            if product.name.downcase.include? word.downcase
              @products <<  product
            elsif  product.description.downcase.include? word.downcase
              @products <<  product
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

