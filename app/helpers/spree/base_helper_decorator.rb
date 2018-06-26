module Spree::BaseHelper
    def pretty_time(time, format = :long)
  
         I18n.l(@order.completed_at) 
    end
end
