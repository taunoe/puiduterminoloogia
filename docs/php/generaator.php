<?php
date_default_timezone_set('Europe/Tallinn');

# Folders
define("SRCFOLDER",      "../src/");
define("JSONFOLDER",     "../json/");
define("HTMLFOLDER",     "../html/");
# Files
define("INDEXFILE",      "index.json");
define("INDEXFILEEESTI", "index-eesti.html");
define("INDEXFILINGLISE","index-inglise.html");
define("INDEXFILESAKSA", "index-saksa.html");
define("INDEXFILESOOME", "index-soome.html");
define("INDEXFILEVENE",  "index-vene.html");
define("DATAFILE",       "puiduterminid.csv"); //Suur tabel, mis tuleb laiali lammutada


echo SRCFOLDER.DATAFILE;

function loo_fail($file){
  $fail = fopen($file,"w")or die("can't open file $file");
  fclose($fail);
  chmod($file, 0644);
}


################################################################################################
/// Kirjutame iga rea koondtabelist eraldi json failiks

if (($handle = fopen(SRCFOLDER.DATAFILE, "r")) !== FALSE) {
	$row = 0;
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);//tulpade arv
        $row++;

        $patterns       = array ('/"/');
    	$replacements   = array ('\"'); 
    	// preg_replace ($patterns, $replacements, $data[1]);

    	$d1 = preg_replace ($patterns, $replacements, $data[1]);
    	$d2 = preg_replace ($patterns, $replacements, $data[2]);
    	$d3 = preg_replace ($patterns, $replacements, $data[3]);
    	$d4 = preg_replace ($patterns, $replacements, $data[4]);
    	$d5 = preg_replace ($patterns, $replacements, $data[5]);
    	$d6 = preg_replace ($patterns, $replacements, $data[6]);
    	$d7 = preg_replace ($patterns, $replacements, $data[7]);

        	if($row != 1){
        		$output = "{";
        		$output .= "\"id\"			: \"$data[0]\",";
        		$output .= "\"eesti\"		: \"$d1\",";
        		$output .= "\"inglise\"		: \"$d2\",";
        		$output .= "\"saksa\"		: \"$d3\",";
        		$output .= "\"vene\"		: \"$d4\",";
        		$output .= "\"soome\"		: \"$d5\",";
        		$output .= "\"seletuseesti\": \"$d6\",";
                $output .= "\"kirjeldus\"	: \"$d7\"";
        		$output .= "}";
        		$file = fopen(JSONFOLDER.$data[0].".json", "w+") or die ("error");
        		fputs ($file,$output);
     			fclose($file);
        	}
    }
    fclose($handle);
}

###############################################################################################
///// Kirjutame HTML index failid

if (($handle = fopen(SRCFOLDER.DATAFILE, "r")) !== FALSE) {
	$row = 0;
	$outputeesti   = "";
	$outputinglise = "";
    $outputsaksa   = "";
    $outputvene    = "";
    $outputsoome   = "";

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);//tulpade arv
        $row++;

        	if($row != 1){
        		if(!empty($data[1]) AND $data[1] != '?'){
        			$outputeesti .= "<li><a href=\"#!$data[0]\">$data[1]</a></li>";
        		}
        		if(!empty($data[2]) AND $data[2] != '?'){
        			$outputinglise .= "<li><a href=\"#!$data[0]\">$data[2]</a></li>";
        		}
        		if(!empty($data[3]) AND $data[3] != '?'){
        			$outputsaksa .= "<li><a href=\"#!$data[0]\">$data[3]</a></li>";
        		}
        		if(!empty($data[4]) AND $data[4] != '?'){
        			$outputvene .= "<li><a href=\"#!$data[0]\">$data[4]</a></li>";
        		}
        		if(!empty($data[5]) AND $data[5] != '?'){
        			$outputsoome .= "<li><a href=\"#!$data[0]\">$data[5]</a></li>";
        		}
        		
        	}
    }
    fclose($handle);//src file

    $file = fopen(HTMLFOLDER.INDEXFILEEESTI, "w+") or die ("error");
    fputs ($file, "<ul>");
    fputs ($file, $outputeesti);
    fputs ($file, "</ul>");
    fclose($file);

    $file = fopen(HTMLFOLDER.INDEXFILINGLISE, "w+") or die ("error");
    fputs ($file, "<ul>");
    fputs ($file, $outputinglise);
    fputs ($file, "</ul>");
    fclose($file);

    $file = fopen(HTMLFOLDER.INDEXFILESAKSA, "w+") or die ("error");
    fputs ($file, "<ul>");
    fputs ($file, $outputsaksa);
    fputs ($file, "</ul>");
    fclose($file);

    $file = fopen(HTMLFOLDER.INDEXFILEVENE, "w+") or die ("error");
    fputs ($file, "<ul>");
    fputs ($file, $outputvene);
    fputs ($file, "</ul>");
    fclose($file);

    $file = fopen(HTMLFOLDER.INDEXFILESOOME, "w+") or die ("error");
    fputs ($file, "<ul>");
    fputs ($file, $outputsoome);
    fputs ($file, "</ul>");
    fclose($file);

}


###############################################################################################
///// Kirjutame EESTI index faili
/*
if (($handle = fopen(SRCFOLDER.DATAFILE, "r")) !== FALSE) {
	$outputeesti   = "";
    $outputinglise = "";
    $outputsaksa   = "";
    $outputvene    = "";
    $outputsoome   = "";

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);//tulpade arv
        $row++;

        	if($row != 1){
        		$outputeesti .= "{\"id\": \"$data[0]\","; //eesti
        		$outputeesti .= "\"name\": \"$data[1]\"},"; //eesti
        	}
    }
    fclose($handle);//src file

    $file = fopen(JSONFOLDER.INDEXFILEEESTI, "w+") or die ("error");

    fputs ($file, "{\"eesti\":[");
    fputs ($file, $outputeesti);
    fputs ($file, "{\"id\": \"$data[0]\",\"name\": \"$data[1]\"}");
    fputs ($file, "]}");

    fclose($file);//output file
}
*/
###############################################################################################
///// Kirjutame json index faili

if (($handle = fopen(SRCFOLDER.DATAFILE, "r")) !== FALSE) {
	$row = 0;
	$outputeesti   = "";
    $outputinglise = "";
    $outputsaksa   = "";
    $outputvene    = "";
    $outputsoome   = "";

    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);//tulpade arv
        $row++;

        	if($row != 1){
        		$outputeesti .= "\t\t{\n\t\t\t\"i\": \"$data[0]\",\n";
        		$outputeesti .= "\t\t\t\"name\": \"$data[1]\"\n\t\t},\n"; //eesti

        		$outputinglise .= "\t\t{\n\t\t\t\"i\": \"$data[0]\",\n";
        		$outputinglise .= "\t\t\t\"name\": \"$data[2]\"\n\t\t},\n"; //inglise

        		$outputsaksa .= "\t\t{\n\t\t\t\"i\": \"$data[0]\",\n";
        		$outputsaksa .= "\t\t\t\"name\": \"$data[3]\"\n\t\t},\n"; //saksa

        		$outputvene .= "\t\t{\n\t\t\t\"i\": \"$data[0]\",\n";
        		$outputvene .= "\t\t\t\"name\": \"$data[4]\"\n\t\t},\n"; //vene

        		$outputsoome .= "\t{\n\t\t\t\"i\": \"$data[0]\",\n";
        		$outputsoome .= "\t\t\t\"name\": \"$data[5]\"\n\t\t},\n"; //soome
        	}
    }
    fclose($handle);//src file

    $file = fopen(JSONFOLDER.INDEXFILE, "w+") or die ("error");

    fputs ($file, "{\n");

    fputs ($file, "\t\"eesti\": [\n");
    fputs ($file, $outputeesti);
    fputs ($file, "\t},\n");//

    fputs ($file, "\t\"inglise\": [\n");
    fputs ($file, $outputinglise);
    fputs ($file, "\t},\n");//

    fputs ($file, "\t\"saksa\": [\n");
    fputs ($file, $outputsaksa);
    fputs ($file, "\t},\n");//

    fputs ($file, "\t\"vene\": [\n");
    fputs ($file, $outputvene);
    fputs ($file, "\t},\n");//

    fputs ($file, "\t\"soome\": [\n");
    fputs ($file, $outputsoome);
    fputs ($file, "\t}");

    fclose($file);//output file
}


?>