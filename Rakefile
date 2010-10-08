require "rubygems"
require "bundler/setup"

Bundler.require :default

desc 'Create bundled files for distribution.'
task :bundle do
  version = File.read('VERSION').strip
  
  files = [
    'model.js',
    'model/base.js',
    'model/collection.js',
    'model/associations.js',
    'model/associations/belongs_to.js',
    'model/associations/has_many.js'
  ]
  
  string = files.inject '' do |s, f|
    s << File.read("src/#{f}")
  end
  
  ["dist/modelizer-#{version}.js", "dist/modelizer.js"].each do |path|
    File.open(path, 'w') do |f|
      f.write string
    end
  end
  
  ["dist/modelizer-#{version}-min.js", "dist/modelizer-min.js"].each do |path|
    File.open(path, 'w') do |f|
      f.write Closure::Compiler.new.compile(string)
    end
  end
  
end
