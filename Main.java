import java.util.*; 

class Movie{
    String name;
    int[] years = new int[2];
    
    Movie(String n, int[] y){
        this.name=n;
        this.years=y;
    }
}


public class Main
{
    static int getMaxMoviesYear(List<Movie> movies){
        int max = -1;
        Map<Integer, Integer> yearCounts = new HashMap<>();
        for(Movie m:movies){
            for(int i = m.years[0];i<=m.years[1];i++){
                if(yearCounts.containsKey(i)){
                    yearCounts.put(i,yearCounts.get(i)+1);
                }
                else{
                    yearCounts.put(i,1);
                }
                if(max==-1 || (max!=-1 && yearCounts.get(i)>yearCounts.get(max))){
                    max = i;
                }
            }
        }
        return max;
    }

	public static void main(String[] args) {
	    List<Movie> movieList = new ArrayList<>();
	    movieList.add(new Movie("foo", new int[] {2009, 2010}));
		movieList.add(new Movie("fii", new int[] {2006, 2010}));
		movieList.add(new Movie("foo", new int[] {2008, 2009}));
		movieList.add(new Movie("foo", new int[] {2001, 2001}));
		movieList.add(new Movie("foo", new int[] {2007, 2009}));
		movieList.add(new Movie("foo", new int[] {2010, 2010}));
		movieList.add(new Movie("foo", new int[] {2010, 2010}));
		movieList.add(new Movie("foo", new int[] {2006, 2010}));
		movieList.add(new Movie("foo", new int[] {2003, 2004}));
		
		int maxYear = getMaxMoviesYear(movieList);
		System.out.println(maxYear);
	}
}
