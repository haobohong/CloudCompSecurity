import json

def lambda_handler(event, context):
    # TODO implement
    #print (event)
    bmi = BMI_calculator(int(event['queryStringParameters']["height"]), int(event['queryStringParameters']["weight"]))
    print (bmi)
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',

        },
        'body': json.dumps(bmi)
    }
def BMI_calculator(height,weight):
    BMI=weight/((height/100)**2)
    return BMI
