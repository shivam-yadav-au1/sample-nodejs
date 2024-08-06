pipeline {
    options {
        disableConcurrentBuilds()
      	
  }
  agent any
  tools {nodejs "nodejs-20"}

  stages {
     stage('Build Stage is in progress........') {	
    
			steps {
              	echo 'Backend branch build is in progess.....'
                sh 'node -v'
				sh 'ls -la'
                
         
            }
		}
    stage('Docker Build Stage') {
	    steps {
		echo "Runningj build number ${env.BUILD_ID} on ${env.JENKINS_URL}"
        }
    }
    stage('Deploy App Stage') {
            steps {
             echo "Deploy Stage"
	     sh 'rm -rf .git'
             sh 'ls -la'
	     sh ' tar -zcvf code-archive.tar.gz .'
	     sh 'ls -la'
             sh 'ssh ubuntu@13.127.18.11 mkdir -p /var/www/temp_deploy'



        }
}

}

}
