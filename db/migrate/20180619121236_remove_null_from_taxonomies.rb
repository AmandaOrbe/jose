class RemoveNullFromTaxonomies < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_taxonomies, :name ,:string, :null => true
  end
end
