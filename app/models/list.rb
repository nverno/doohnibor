# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  public     :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
  validates :name, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :user, optional: true

  has_many :watchlists
  has_many :watchers,
           through: :watchlists,
           source: :user
  has_many :items,
           foreign_key: :list_id,
           class_name: :ListAsset,
           dependent: :destroy

  def self.public_lists
    List.where(public: true)
  end

  def assets=(assets)
    assets.each do |asset| 
      ListAsset.create!(list_id: id, symbol: asset)
    end
  end
end
