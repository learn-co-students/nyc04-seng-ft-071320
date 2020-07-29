require 'spec_helper'

describe 'hashketball' do
  let(:alan_anderson) {
    { :player_name => "Alan Anderson", :number => 0, :shoe => 16, :points => 22, :rebounds => 12, :assists => 12, :steals => 3, :blocks => 1, :slam_dunks => 1 }
  }

  let(:reggie_evans) {
    { :player_name => "Reggie Evans", :number => 30, :shoe => 14, :points => 12, :rebounds => 12, :assists => 12, :steals => 12, :blocks => 12, :slam_dunks => 7 }
  }

  let(:brook_lopez) {
    { :player_name => "Brook Lopez", :number => 11, :shoe => 17, :points => 17, :rebounds => 19, :assists => 10, :steals => 3, :blocks => 1, :slam_dunks => 15 }
  }

  let(:mason_plumlee) {
    { :player_name => "Mason Plumlee", :number => 1, :shoe => 19, :points => 26, :rebounds => 11, :assists => 6, :steals => 3, :blocks => 8, :slam_dunks => 5 }
  }

  let(:jason_terry) {
    { :player_name => "Jason Terry", :number => 31, :shoe => 15, :points => 19, :rebounds => 2, :assists => 2, :steals => 4, :blocks => 11, :slam_dunks => 1 }
  }

  let(:jeff_adrien) {
    { :player_name => "Jeff Adrien", :number => 4, :shoe => 18, :points => 10, :rebounds => 1, :assists => 1, :steals => 2, :blocks => 7, :slam_dunks => 2 }
  }

  let(:bismack_biyombo) {
    { :player_name => "Bismack Biyombo", :number => 0, :shoe => 16, :points => 12, :rebounds => 4, :assists => 7, :steals => 22, :blocks => 15, :slam_dunks => 10 }
  }

  let(:desagna_diop) {
    { :player_name => "DeSagna Diop", :number => 2, :shoe => 14, :points => 24, :rebounds => 12, :assists => 12, :steals => 4, :blocks => 5, :slam_dunks => 5 }
  }

  let(:ben_gordon) {
    { :player_name => "Ben Gordon", :number => 8, :shoe => 15, :points => 33, :rebounds => 3, :assists => 2, :steals => 1, :blocks => 1, :slam_dunks => 0 }
  }

  let(:kemba_walker) {
    { :player_name => "Kemba Walker", :number => 33, :shoe => 15, :points => 6, :rebounds => 12, :assists => 12, :steals => 7, :blocks => 5, :slam_dunks => 12 }
  }

  describe '#game_hash' do
    let(:top_level_keys) { [:home, :away] }
    let(:team_level_keys) { [:team_name, :colors, :players] }

    it 'returns a hash' do
      expect(game_hash).to be_a(Hash)
    end

    it 'returns the correct top-level keys' do
      top_level_keys.each do |key|
        expect(game_hash.keys).to include(key)
      end
    end

    it 'returns the correct team-level keys' do
      team_level_keys.each do |key|
        expect(game_hash.values.first.keys).to include(key)
      end
    end

    it 'returns the correct player data for the :home team' do
      home_players = [alan_anderson, reggie_evans, brook_lopez, mason_plumlee, jason_terry]
      names = game_hash[:home][:players].map {|player| player[:player_name]}

      home_players.each do |example_player_hash|
        expect(names).to include(example_player_hash[:player_name]), "Expected the name #{example_player_hash[:player_name]}, but could not find. Check the spelling of player names. Capitalization matters!"

        player_stats = game_hash[:home][:players].find do |player|
          player[:player_name] == example_player_hash[:player_name]
        end

        expect(player_stats.keys).to match_array(example_player_hash.keys)
        expect(player_stats.values).to match_array(example_player_hash.values)
      end
    end

    it 'returns the correct player data for the :away team' do
      away_players = [jeff_adrien, bismack_biyombo, desagna_diop, ben_gordon, kemba_walker]
      names = game_hash[:away][:players].map {|player| player[:player_name]}

      away_players.each do |example_player_hash|
        expect(names).to include(example_player_hash[:player_name])

        player_stats = game_hash[:away][:players].find do |player|
          player[:player_name] == example_player_hash[:player_name]
        end

        expect(player_stats.keys).to match_array(example_player_hash.keys)
        expect(player_stats.values).to match_array(example_player_hash.values)
      end
    end
  end

  describe '#num_points_scored' do

    it 'knows the number of points scored by each player' do
      expect(num_points_scored("Brook Lopez")).to eq(17)
      expect(num_points_scored("Jeff Adrien")).to eq(10)
      expect(num_points_scored("Bismack Biyombo")).to eq(12)
      expect(num_points_scored("DeSagna Diop")).to eq(24)
      expect(num_points_scored("Ben Gordon")).to eq(33)
      expect(num_points_scored("Kemba Walker")).to eq(6)
      expect(num_points_scored("Alan Anderson")).to eq(22)
      expect(num_points_scored("Reggie Evans")).to eq(12)
      expect(num_points_scored("Mason Plumlee")).to eq(26)
      expect(num_points_scored("Jason Terry")).to eq(19)
    end

  end

  describe '#shoe_size' do

    it 'knows the shoe size of each player' do
      expect(shoe_size("Jeff Adrien")).to eq(18)
      expect(shoe_size("Bismack Biyombo")).to eq(16)
      expect(shoe_size("DeSagna Diop")).to eq(14)
      expect(shoe_size("Ben Gordon")).to eq(15)
      expect(shoe_size("Kemba Walker")).to eq(15)
      expect(shoe_size("Alan Anderson")).to eq(16)
      expect(shoe_size("Reggie Evans")).to eq(14)
      expect(shoe_size("Brook Lopez")).to eq(17)
      expect(shoe_size("Mason Plumlee")).to eq(19)
      expect(shoe_size("Jason Terry")).to eq(15)
    end

  end

  describe '#team_colors' do

    it 'knows the Brooklyn Nets colors are Black and White' do
      expect(team_colors("Brooklyn Nets")).to contain_exactly("Black", "White")
      
    end

    it 'knows the Charlotte Hornets colors are Turquoise and Purple' do
      expect(team_colors("Charlotte Hornets")).to contain_exactly("Turquoise", "Purple")
    end
  end

  describe '#team_names' do

    it 'returns the team names' do
      teams = team_names
      expect(teams.size).to eq(2)
      teams.each do |name|
        expect(["Brooklyn Nets", "Charlotte Hornets"]).to include(name)
      end
    end

  end

  describe '#player_numbers' do

    it 'returns the player jersey numbers' do
      charlotte_numbers = [0, 2, 4, 8, 33]
      brooklyn_numbers = [0, 1, 11, 30, 31]

      expect(player_numbers("Brooklyn Nets").sort).to eq(brooklyn_numbers)
      expect(player_numbers("Charlotte Hornets").sort).to eq(charlotte_numbers)
    end

  end

  describe '#player_stats' do
    it 'returns all stats for a given player' do
      expect(player_stats("Jeff Adrien")).to eq(jeff_adrien)
      expect(player_stats("Bismack Biyombo")).to eq(bismack_biyombo)
      expect(player_stats("DeSagna Diop")).to eq(desagna_diop)
      expect(player_stats("Ben Gordon")).to eq(ben_gordon)
      expect(player_stats("Kemba Walker")).to eq(kemba_walker)
      expect(player_stats("Alan Anderson")).to eq(alan_anderson)
      expect(player_stats("Reggie Evans")).to eq(reggie_evans)
      expect(player_stats("Brook Lopez")).to eq(brook_lopez)
      expect(player_stats("Mason Plumlee")).to eq(mason_plumlee)
      expect(player_stats("Jason Terry")).to eq(jason_terry)
    end

  end

  describe '#big_shoe_rebounds' do

    it 'returns the number of rebounds of the player with the biggest shoe size' do
      expect(big_shoe_rebounds).to eq(11)
    end

  end

end
